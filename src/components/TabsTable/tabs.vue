<template>
  <el-tabs v-model="currentTab" type="card" editable @edit="handleTabsEdit">
    <el-tab-pane
      :key="item.name"
      v-for="(item) in editableTabs"
      :label="item.title"
      :name="item.name"
    >
      {{item.content}}
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import request from "../../utils/request";

export default {
  data() {
    return {
      currentTab: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content"
        }
      ]
    };
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let { editableTabs: tabs } = this;
        const lastName = tabs[tabs.length - 1].name;
        const newTab = {
          title: "New Tab",
          name: +lastName + 1 + "",
          content: "New Tab content"
        };

        tabs = tabs.concat(newTab);

        // currentTab处理
        const currentTab = newTab.name;

        // setState
        this.editableTabs = tabs;
        this.currentTab = currentTab;

        // 发起请求
        this.request({
          uri: "tabs",
          method: "post",
          data: newTab
        });
      }
      if (action === "remove") {
        let { editableTabs: tabs, currentTab } = this;
        const targetIndex = tabs.findIndex(tab => tab.name === targetName);
        let currentIndex = tabs.findIndex(tab => tab.name === currentTab);
        tabs = tabs.filter(tab => tab.name !== targetName);

        // currentTab处理
        if (targetIndex !== currentIndex || currentIndex === tabs.length) {
          currentIndex = currentIndex - 1;
        }
        currentTab = tabs[currentIndex].name;

        // setState
        this.editableTabs = tabs;
        this.currentTab = currentTab;
      }
    },
    request
  }
};
</script>