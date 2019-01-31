<template>
  <div>
    <div style="margin-bottom: 15px;">
      <el-button size="medium" @click="fetchData()">刷新</el-button>
      <el-button size="medium" @click="handleAdd()" type="primary">新增</el-button>
    </div>
    <el-table border
      :data="tableData"
      style="width: 100%">
      <el-table-column width="60"
        prop="id"
        label="ID">
      </el-table-column>
      <el-table-column width="90"
        prop="name"
        label="姓名"
        :filters="[{text: '刘晨', value: '刘晨'}, {text: '何腾欢', value: '何腾欢'}]"
        :filter-method="filterName"
      >
      </el-table-column>
      <el-table-column
        prop="cmd"
        label="命令">
        <template slot-scope="scope">
             <code class="code">{{scope.row.cmd}}</code>
        </template>
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
      >
        <template slot-scope="scope">
          <span v-html="scope.row.remarkHtml">
          </span>
        </template>
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
      // data数据处理
      data.forEach(item => {
        item.remarkHtml = item.remark && item.remark.replace(/\n/gm, "<br />");
      });
      this.tableData = data;
    },
    filterName(value, row) {
      return row.name === value;
    }
  }
};
</script>

<style>
.pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
.code {
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  background-color: #fafafa;
  border: 1px solid #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
  font-size: 90%;
  padding: 2px 4px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>