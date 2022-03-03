const barChartConfig = {
  width: 1000,
  height: 400,
  // background: "rgba(0,0,0,0.1)",
  border: "1px solid #999",
  padding: [60, 140, 50, 65],
  dataProcessing: {
    needSort: false,
    sort: "indexNodes",
    sortReverse: false,
    needFixed: false,
    fixedKey: "vps",
    fixedNum: 2,
  },
  tooltip: {
    hasTooltip: true,
    content: ["test_no", "acc", "search_rps", "ef"],
    fontSize: 16,
    fontWeight: 500,
    fontColor: "#43a2ca",
  },
  title: {
    text: "Recall - Latency",
    fontSize: 24,
    fontWeight: 600,
    fontColor: "#222",
  },
  x: {
    key: "ef",
    scaleType: "bin",
    tickType: "bottom",
    tickFontSize: 14,
    tickColor: "#666",
    label: "Recall Rate",
    labelFontSize: 16,
    labelWeight: 600,
    labelColor: "#444",
    inset: 8,
    zoom: true,
  },
  y: {
    key: "search_rps",
    scaleType: "linear",
    tickType: "left",
    tickFontSize: 14,
    tickColor: "#666",
    label: "Latency / s",
    labelFontSize: 16,
    labelWeight: 600,
    labelColor: "#444",
    inset: 6,
    zoom: false,
    fromZero: true,
  },
  groupBy: {
    isGroupBy: true,
    key: "test_no",
    sameXScale: false,
    sameYScale: true,
  },
  bar: {
    isColorMapping: true,
    color: "test_no",
    withLabels: true,
    label: (item) => `ef=${item.ef}`,
    labelFontSize: 14,
  },
};

export default barChartConfig;
