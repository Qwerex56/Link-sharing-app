import Link from "@/modules/types/LinkType";
import { get, set } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed } from "vue";
import { ref, Ref } from "vue";

const useLinkStore = defineStore("linkStore", () => {
  const links: Ref<Link[]> = ref([]);

  // Creates empty link
  const appendLinks = () => {
    if (links.value.length >= 32) {
      return;
    }

    const increment = () => {
      let hId = 0;
      links.value.forEach(link => {
        hId >= link.linkId ? hId = link.linkId + 1 : hId;
      });
      return hId;
    }

    links.value.push({
      linkId: increment(),
      siteUrl: '',
      site: ''
    });
  }

  // Sets links
  const setLinks = (newLinks: Link[]): void => {
    set(links, newLinks);
  }

  // Removes link from store
  const removeLink = (id: number) => {
    links.value = links.value.filter(link => link.linkId !== id);
  }

  const setLinkUrl = (url: string, linkId: number) => {
    get(links)[linkId].siteUrl = url;
  }

  const getLinks = computed(() => links.value);

  return {
    appendLinks,
    setLinks,
    removeLink, 
    setLinkUrl,
    getLinks,
  }
});

export default useLinkStore
