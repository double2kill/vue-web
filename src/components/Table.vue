<template>
    <el-table border
      :data="tableData"
      style="width: 100%">
      <el-table-column width="180"
        prop="id"
        label="ID">
      </el-table-column>
      <el-table-column width="180"
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column width="360"
        prop="cmd"
        label="命令">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注">
      </el-table-column>
    </el-table>
</template>


<script>
export default {
  name: "app",
  data() {
    return {
      input: "",
      tableData: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await fetch(
        "http://www.greatwebtech.cn:3000/useful_cmds"
      ).then(res => res.json());
      this.tableData = data;
    }
  }
};
</script>