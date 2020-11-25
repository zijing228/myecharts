<template>
  <div id="main" :style="{width: '600px',height:'400px'}"></div>
</template>

<script scoped>

export default {
  name: "mycharts",
  mounted(){console.log($.get)
  	this.dochart();
  },
  methods:{
  dochart(){
	var myChart = echarts.init(document.getElementById('main'));
	myChart.showLoading();

		$.getJSON('./src/node.json', function (json) {
		    myChart.hideLoading();
		    debugger;
		    var option = {
		        title: {
		            text: 'NPM Dependencies'
		        },
		        animationDurationUpdate: 1500,
		        animationEasingUpdate: 'quinticInOut',
		        series : [
		            {
		                type: 'graph',
		                layout: 'none',
		                // progressiveThreshold: 700,
		                data: json.nodes.map(function (node) {
		                    return {
		                        x: node.x,
		                        y: node.y,
		                        id: node.id,
		                        name: node.label,
		                        symbolSize: node.size,
		                        itemStyle: {
		                            color: node.color
		                        }
		                    };
		                }),
		                edges: json.edges.map(function (edge) {
		                    return {
		                        source: edge.sourceID,
		                        target: edge.targetID
		                    };
		                }),

		                emphasis: {
		                    label: {
		                        position: 'right',
		                        show: true
		                    }
		                },
		                roam: true,
		                focusNodeAdjacency: true,
		                lineStyle: {
		                    width: 0.5,
		                    curveness: 0.3,
		                    opacity: 0.7
		                }
		            }
		        ]
		    }
		    myChart.setOption(option, true);
		});

  }
  }
}
</script>

<style scoped>
</style>