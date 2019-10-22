<template>
  <div class="panel-icon">
    <img
      v-if="is_bookmarks_list"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAsVBMVEUAAABHBgCUPwCMOQCFNAB5KgBwJAAAAAAAAACieG6GMQCQPQB/MABnHQBVEAA2BQCVQABUVFRUVFQAAAD5/f3y+Pjj9PTo8/Pg7OzZ6Ojb3Nz2+/vr9vb////8/v69zs7k7+/H2Njp+fnv+Pjc6ure3uTS4+PM29vPz9jC09PHx9K/0NCzxMSmpqegoaLZlWKsaDVmmf/Y4+Osvb2qqqyYmJqQkJKJiYt3d3fCcW4zqiJYnUYQAAAAFHRSTlMAzMzMzMzMFAnm0MzMzMymmWdSLF9sXC4AAACdSURBVBjTPc9FFoMwAABRGtwdWhII7laX+x+sr0leZ/l3w5EUz3U9hWM5AGhqkqgaAA4BsO1j3zT9uG+AgJ6uz/tyWx9LqhPg0ywhZSlPIQtYGQUh+EDctRcIA4ECDFmQghG+0VRMRdGGBgGxilmVSAGd83kYujxHFCR0ZCGJQvyqr3jGuI4pmNGJFZm/UdkqI1ZpyQon+/bhn+3LX139EaZ24gflAAAAAElFTkSuQmCC">

    <img
      v-if="is_add_bookmark"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA6lBMVEUAAAAAU6gAQ48AS5sAT6JVf3+ZqqtVf3/pUVFaZWfd7O09Yo4nUIUSPXkEMXAANHnGHR0APocAR5UAIlMAAAAAAAAAESoADSAACBNVf38AAwgAAABVf38AAQH4+/v1bm4AAADs9PTaNTXa5+eyycnEHh55nJx4m5u6JydVf38AAAD////7/v73/Pzz+fne6+vs9vbi8fH7ZGTiTk6/zs61xcWuv7+qu7v9eXnNQ0PR3t6MnZ3/fX39dHT7b2/6amrdS0vaSUnVR0fRRUWyNjbt9/e3yMjftrbctLSjtLSer6+TpKTFPz/BPT1gxz//AAAAK3RSTlMAm6+moWX+S/738t/X0MzAubWqmo9iSDowLyUQDgr5+O3r59e0mnZ2XlcaX1DFVAAAALxJREFUGNM9yNUSglAUQNFjAHZ3d131KI102Pr/v+PgZdhPexZwTKWy3Axg0OW2DMMBJEhGHc9W3fViPh2RxB8MQ8gxuevxsKcgqKqA4vkUQZoIpungjUI6BMeyXJRiSBHXtj2UKaRC8HjeRyWGGvF5XsMnhRpAknw07YsvCskQgvsjQDaGKtkfjid8U6gClBVZEi+o40WUZKUMUC8VC/ksq7PZfKFYqgMMe512q9mYNJqtdqc3hKj+rh/dD+T5Iek3w551AAAAAElFTkSuQmCC">
  </div>
</template>

<script>
export default {
  props: ["name"],
  computed: {
    is_bookmarks_list() {
      return this.name === 'bookmarks_list'
    },

    is_add_bookmark() {
      return this.name === 'add_bookmark'
    }
  }
}
</script>

<style>
.panel-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 28px;
}
</style>
