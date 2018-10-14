<template>
  <div>
    <div style="margin-bottom: 15px;">
      <el-button size="medium" @click="fetchData()">刷新</el-button>
      <el-button size="medium" @click="handleAdd()" type="primary">新增</el-button>
    </div>
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
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleDel(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
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
    handleAdd() {
      this.$router.push({
        path: "/tableAdd"
      });
    },
    handleEdit(item) {
      this.$router.push({
        name: "table",
        params: {
          id: item.id
        }
      });
    },
    handleDel(item) {
      fetch(`http://www.greatwebtech.cn:3000/useful_cmds/${item.id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "DELETE"
      }).then(() => {
        this.fetchData();
      });
    },
    async fetchData() {
      const data = await fetch(
        "http://www.greatwebtech.cn:3000/useful_cmds"
      ).then(res => res.json());
      this.tableData = data;
    }
  }
};
</script>