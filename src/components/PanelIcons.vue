<template>
  <div class="panel-icon">
    <img v-if="is_bookmarks_list" :src="list_icon" />
    <img v-if="is_add_bookmark" :src="bookmark_icon" />
    <img v-if="is_goto" :src="goto_icon" />
  </div>
</template>

<script>
export default {
  props: ["name"],

  data() {
    return {
      list_icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAsVBMVEUAAABHBgCUPwCMOQCFNAB5KgBwJA" +
        "AAAAAAAACieG6GMQCQPQB/MABnHQBVEAA2BQCVQABUVFRUVFQAAAD5/f3y+Pjj9PTo8/Pg7OzZ6Ojb3Nz2+/vr9vb////8/v69zs7k7+" +
        "/H2Njp+fnv+Pjc6ure3uTS4+PM29vPz9jC09PHx9K/0NCzxMSmpqegoaLZlWKsaDVmmf/Y4" +
        "+Osvb2qqqyYmJqQkJKJiYt3d3fCcW4zqiJYnUYQAAAAFHRSTlMAzMzMzMzMFAnm0MzMzMymmWdSLF9sXC4AAACdSURBVBjTPc9FFoMwA" +
        "ABRGtwdWhII7laX+x+sr0leZ/l3w5EUz3U9hWM5AGhqkqgaAA4BsO1j3zT9uG+AgJ6uz/tyWx9LqhPg0ywhZSlPIQtYGQUh+EDctRcIA" +
        "4ECDFmQghG+0VRMRdGGBgGxilmVSAGd83kYujxHFCR0ZCGJQvyqr3jGuI4pmNGJFZm/UdkqI1ZpyQon+/bhn+3LX139EaZ24gflAAAAA" +
        "ElFTkSuQmCC",

      bookmark_icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA6lBMVEUAAAAAU6gAQ48AS5sA" +
        "T6JVf3+ZqqtVf3/pUVFaZWfd7O09Yo4nUIUSPXkEMXAANHnGHR0APocAR5UAIlMAAAAAAAAAESoADSAACBNVf38AAwgAAABVf38AAQH4" +
        "+/v1bm4AAADs9PTaNTXa5+eyycnEHh55nJx4m5u6JydVf38AAAD////7/v73/Pzz+fne6+vs9vbi8fH7ZGTiTk6/zs61xcWuv7+qu7v9" +
        "eXnNQ0PR3t6MnZ3/fX39dHT7b2/6amrdS0vaSUnVR0fRRUWyNjbt9/e3yMjftrbctLSjtLSer6+TpKTFPz/BPT1gxz//AAAAK3RSTlMA" +
        "m6+moWX+S/738t/X0MzAubWqmo9iSDowLyUQDgr5+O3r59e0mnZ2XlcaX1DFVAAAALxJREFUGNM9yNUSglAUQNFjAHZ3d131KI102Pr/" +
        "v+PgZdhPexZwTKWy3Axg0OW2DMMBJEhGHc9W3fViPh2RxB8MQ8gxuevxsKcgqKqA4vkUQZoIpungjUI6BMeyXJRiSBHXtj2UKaRC8Hje" +
        "RyWGGvF5XsMnhRpAknw07YsvCskQgvsjQDaGKtkfjid8U6gClBVZEi+o40WUZKUMUC8VC/ksq7PZfKFYqgMMe512q9mYNJqtdqc3hKj+" +
        "rh/dD+T5Iek3w551AAAAAElFTkSuQmCC",

      goto_icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAP1BMVEUAAAAYswEYswF25gBj4QBP3QDs/w" +
        "DZ+wDF9wCw8gCa7QA72QA6zQEsxgEfvwGK6gCC5gBu4ABc2QAo1QBL0wCTCL4hAAAAAnRSTlMAsyT7Lw4AAABdSURBVBjTdc9JDoAgEE" +
        "RRLMUJmbn/WS2IGtroW0DyCZBW39D0YSYRFhJhJRE2EmGnOwwgH4IHDfV0rGJsGxRhopTqet2C1roULnjeNOY4jEH3S7Y2QwzjHN7jqR" +
        "8nR6QCl/yh7JsAAAAASUVORK5CYII="
    };
  },

  computed: {
    is_bookmarks_list() {
      return this.name === "bookmarks_list";
    },

    is_add_bookmark() {
      return this.name === "add_bookmark";
    },

    is_goto() {
      return this.name === "goto";
    }
  }
};
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
