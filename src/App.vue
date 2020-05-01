<template>
  <!-- <div>
    <router-view /> 

  </div>-->
  <div id="body">
    <aside id="column-1">
      <button @click="addBtn()">Добавить кнопку</button>
    </aside>
    <aside id="column-2">
      <label v-for="(el,key) in elements[elements.length - 1]" :key="el.id">
        {{el.label}}
        <input v-model="tempEl[key].value" />
      </label>
    </aside>
    <div id="content">
      <tag
        v-if="tempEl"
        :is="tempEl.tag"
        :style="{width:tempEl.width.value + 'px', height:tempEl.height.value +'px'}"  
      >{{tempEl.text.value}} </tag> 
    </div>
  </div>
</template> 

<script>
export default {
  name: "App",
  data: () => ({
    elements: [], 
  }),
  methods: {
    addBtn: function(event) {
      this.elements.push({
        tag: "button",
        text: { value: "Текст", label: "Введите текст кнопки:" },
        width: { value: "100", label: "Укажите ширину:" },
        height: { value: "50", label: "Укажите высоту:" }
      });
      this.elements[this.elements.length - 1];
      this.tempEl = { ...this.elements[this.elements.length - 1] };
    }
  }
};
</script>
 
<style lang="scss">
#body {
  display: flex;
  #column-1 {
    width: 400px;
  }
  #column-2 {
    width: 400px;
  }
  label {
    margin: 10px 0 10px 0;
    display: block;
  }
}
</style> 