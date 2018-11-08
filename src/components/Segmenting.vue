<template>
  <div id="segmenting-wrapper">
      <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'segmenting',
  data: function() {
    return {
      mywidth: 0
    }
  },
  mounted: function() {
    var that = this
    var cvs
    var ctx
    var waves = []
    var waveHeight = 30
    //var colours = ['#f00', '#0f0', '#00f']
    var colours = ['#ff0', '#0ff', '#f0f', '#00f', '#f00']
    this.mywidth = document.body.clientWidth || document.documentElement.clientWidth
    var timer

    function init() {
      cvs = document.getElementById('canvas')
      ctx = cvs.getContext('2d')
      resizeCanvas(cvs)
      for (var i = 0; i < 3; i++) {
        var temp = new Wave(colours[i], 1, 5)
      }
      timer = setInterval(update, 16)
    }

    // function randomColour() {
    //   // body...
    //   var h = Math.round(Math.random() * 360)
    //   return 'hsl(' + h + ', 100%, 50%)'
    // }

    function update(array) {
      // body...
      //ctx.clearRect(0, 0, cvs.width, cvs.height);
      //var fill = window.getComputedStyle(document.querySelector('.header'), null).getPropertyValue('background-color')
      ctx.fillStyle = '#215'
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillRect(0, 0, cvs.width, cvs.height)
      ctx.globalCompositeOperation = 'screen'
      for (var i = 0; i < waves.length; i++) {
        for (var j = 0; j < waves[i].nodes.length; j++) {
          bounce(waves[i].nodes[j])
        }
        drawWave(waves[i])
        //drawLine(waves[i].nodes)
        //drawNodes(waves[i].nodes)
      }
      ctx.globalCompositeOperation = 'hue'
      ctx.fillStyle = '#215'
      //ctx.fillRect(0,0,cvs.width,cvs.height)
    }

    function Wave(colour, lambda, nodes) {
      // body...
      this.colour = colour
      this.lambda = lambda
      this.nodes = []
      // var tick = 1
      for (var i = 0; i <= nodes + 2; i++) {
        var temp = [(i - 1) * cvs.width / nodes, 0, Math.random() * 200, 0.3]//this.speed*plusOrMinus
        this.nodes.push(temp)
        //console.log(temp)
      }
      //console.log(this.nodes)
      waves.push(this)
    }

    function bounce(node) {
      node[1] = waveHeight / 2 * Math.sin(node[2] / 20) + cvs.height / 2
      node[2] = node[2] + node[3]
    }

    function drawWave (obj) {
      var diff = function(a, b) {
        return (b - a) / 2 + a
      }
      ctx.fillStyle = obj.colour
      ctx.beginPath()
      ctx.moveTo(0, cvs.height)
      ctx.lineTo(obj.nodes[0][0], obj.nodes[0][1])
      for (var i = 0; i < obj.nodes.length; i++) {
        if (obj.nodes[i + 1]) {
          ctx.quadraticCurveTo(
            obj.nodes[i][0], obj.nodes[i][1],
            diff(obj.nodes[i][0], obj.nodes[i + 1][0]), diff(obj.nodes[i][1], obj.nodes[i + 1][1])
          )
        } else {
          ctx.lineTo(obj.nodes[i][0], obj.nodes[i][1])
          ctx.lineTo(cvs.width, cvs.height)
        }
      }
      ctx.closePath()
      ctx.fill()
    }

    function drawNodes (array) {
      ctx.strokeStyle = '#888'
      for (var i = 0; i < array.length; i++) {
        ctx.beginPath()
        ctx.arc(array[i][0], array[i][1], 4, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.stroke()
      }
    }

    function drawLine (array) {
      ctx.strokeStyle = '#888'
      for (var i = 0; i < array.length; i++) {
        if (array[i + 1]) {
          ctx.lineTo(array[i + 1][0], array[i + 1][1])
        }
      }
      ctx.stroke()
    }

    function resizeCanvas(canvas, width, height) {
      if (width && height) {
        canvas.width = width
        canvas.height = height
      } else {
        canvas.width = that.mywidth
        canvas.height = waveHeight
      }
    }
    init()
    window.onresize = function windowResize () {
      // 通过捕获系统的onresize事件触发我们需要执行的事件
      this.mywidth = document.body.clientWidth || document.documentElement.clientWidth
      //控制分割条的高宽
      document.getElementById('canvas').style.width = this.mywidth + 'px'
      document.getElementById('canvas').style.height = 30 + 'px'
      clearInterval(timer)
      waves = []//初始化分隔条
      init()
      console.log(window.innerWidth, document.body.clientWidth, document.documentElement.clientWidth)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#segmenting-wrapper {
  background-color: white;
}
</style>
