const contentMap = {
  siteUrl: "https://portalmain-hth.com.cn",
  primaryTag: "华体会",
  sections: [
    {
      id: "sport",
      title: "体育赛事",
      tags: ["足球", "篮球", "网球", "华体会"],
      keywords: ["英超", "NBA", "大满贯", "华体会体育"]
    },
    {
      id: "esport",
      title: "电竞",
      tags: ["LOL", "Dota2", "CSGO", "华体会"],
      keywords: ["英雄联盟", "国际邀请赛", "Major", "华体会电竞"]
    },
    {
      id: "live",
      title: "直播",
      tags: ["真人", "娱乐", "互动", "华体会"],
      keywords: ["主播", "聊天", "游戏", "华体会直播"]
    }
  ]
};

function searchByTag(tag) {
  const results = [];
  for (const section of contentMap.sections) {
    if (section.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))) {
      results.push(section);
    }
  }
  return results;
}

function searchByKeyword(keyword) {
  const matches = [];
  for (const section of contentMap.sections) {
    for (const kw of section.keywords) {
      if (kw.toLowerCase().includes(keyword.toLowerCase())) {
        matches.push({ section: section.title, keyword: kw });
      }
    }
  }
  return matches;
}

function filterContent(query) {
  const tagResults = searchByTag(query);
  const keywordResults = searchByKeyword(query);
  return {
    byTag: tagResults,
    byKeyword: keywordResults,
    total: tagResults.length + keywordResults.length
  };
}

export { contentMap, searchByTag, searchByKeyword, filterContent };