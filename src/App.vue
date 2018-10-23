<template>
  <div id="app">
    <Table />
    <Form />
    <Tabs />
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import Form from "./components/Form.vue";
import Tabs from "./components/TabsTable/tabs.vue";

export default {
  name: "app",
  components: {
    Table,
    Form,
    Tabs
  },
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
