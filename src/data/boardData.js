const boardData = [
  {
    id: Date.now() + Math.random(),
    title: "TO DO",
    cards: [
      {
        id: Date.now() + Math.random(),
        title: "ImplementFeedback collector",
        type: "Feature",
        effortEstimation: 5,
        priority: "P0",
        assignee: "Srishti Gautam",
        desc: "kjdjkvhjdhlejvlkevmekmvkemvenvenvkenvkenvk vkjnekrverv bkejbvke bvkee",
      },
      {
        id: Date.now() + Math.random(),
        title: "Bump version for new API",
        type: "Bug",
        effortEstimation: 3,
        priority: "P1",
        assignee: "Mansi Gautam",
        desc: "kjdjkvhjdhlejvlkevmekmvkemvenvenvkenvkenvk vkjnekrverv bkejbvke bvkee",
      },
      {
        id: Date.now() + Math.random(),
        title: "Add NPS feedback to wallboard",
        type: "Feature",
        effortEstimation: 1,
        priority: "P2",
        assignee: "Abhilasha Singh",
        desc: "kjdjkvhjdhlejvlkevmekmvkemvenvenvkenvkenvk vkjnekrverv bkejbvke bvkee",
      },
    ],
  },
  {
    id: Date.now() + Math.random(),
    title: "IN PROGRESS",
    cards: [
      {
        id: Date.now() + Math.random(),
        title:
          "Refactor stripe verification kew validator to a call to avoid timing out on low internet connection",
        type: "Feature",
        effortEstimation: 3,
        priority: "P0",
        assignee: "Alex Naim",
        desc: "kjdjkvhjdhlejvlkevmekmvkemvenvenvkenvkenvk vkjnekrverv bkejbvke bvkee",
      },
      {
        id: Date.now() + Math.random(),
        title:
          "Update T&C with v1.9 from thr eriters guild in all products that have cross country compliance",
        type: "Bug",
        effortEstimation: 7,
        priority: "P0",
        assignee: "Chris Hemsworth",
        desc: "kjdjkvhjdhlejvlkevmekmvkemvenvenvkenvkenvk vkjnekrverv bkejbvke bvkee",
      },
    ],
  },
  {
    id: Date.now() + Math.random(),
    title: "IN REVIEW",
    cards: [
      {
        id: Date.now() + Math.random(),
        title: "Multi Dest search UI web",
        type: "Feature",
        effortEstimation: 5,
        priority: "P0",
        assignee: "Srishti Gautam",
        desc: "kjdjkvhjdhlejvlkevmekmvkemvenvenvkenvkenvk vkjnekrverv bkejbvke bvkee",
      },
    ],
  },
  {
    id: Date.now() + Math.random(),
    title: "DONE",
    cards: [
      {
        id: Date.now() + Math.random(),
        title: "Fluid book on tablets",
        type: "Feature",
        effortEstimation: 3,
        priority: "P2",
        assignee: "Mansi Gautam",
        desc: "kjdjkvhjdhlejvlkevmekmvkemvenvenvkenvkenvk vkjnekrverv bkejbvke bvkee",
      },
    ],
  },
];

export { boardData };
