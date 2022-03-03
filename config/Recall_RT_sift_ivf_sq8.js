const scatterPlotConfig = {
  width: 1000,
  height: 400,
  // background: "rgba(0,0,0,0.1)",
  border: "1px solid #999",
  padding: [60, 140, 60, 60],
  dataProcessing: {
    needFixed: true,
    fixedKey: "RT",
    fixedNum: 2,
  },
  tooltip: {
    hasTooltip: true,
    content: ["RT", "Recall", "nprobe"],
    fontSize: 16,
    fontWeight: 500,
    fontColor: "#43a2ca",
  },
  title: {
    text: "Recall & RT - sift - ivf_sq8",
    fontSize: 24,
    fontWeight: 600,
    fontColor: "#222",
  },
  circle: {
    r: 3,
    strokeColor: "#fff",
    strokeWidth: 1,
    isCircleColorMapping: true,
    circleColor: "nprobe",
    withLabels: true,
    label: "(item) => `nprobe=${item.nprobe}`",
    labelFontSize: 12,
    withLinks: true,
    isLinkColorMapping: true,
    linkType: "curve",
    linkWidth: 2,
    linkColor: "nprobe",
  },
  x: {
    key: "Recall",
    scaleType: "linear",
    tickType: "bottom",
    tickFontSize: 14,
    tickColor: "#666",
    label: "Recall",
    labelFontSize: 16,
    labelWeight: 600,
    labelColor: "#444",
    inset: 8,
    zoom: true,
  },
  y: {
    key: "RT",
    scaleType: "linear",
    tickType: "left",
    tickFontSize: 14,
    tickColor: "#666",
    label: "RT / s",
    labelFontSize: 16,
    labelWeight: 600,
    labelColor: "#444",
    inset: 6,
    zoom: true,
    fromZero: true,
  },
  groupBy: {
    isGroupBy: false,
    key: "ivf_sq8",
    sameXScale: true,
    sameYScale: true,
  },
};

export default scatterPlotConfig;