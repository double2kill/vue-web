<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="命令">
      <el-input v-model="form.cmd"></el-input>
    </el-form-item>
    <el-form-item label="备注">
      <el-input type="textarea" v-model="form.remark"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="onCancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "web-form",
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    onSubmit(e) {
      const { id } = this.form;
      // 如果有id，那么是编辑，否则是新增
      const method = id ? "PATCH" : "POST";
      let url = "http://www.greatwebtech.cn:3000/useful_cmds";
      if (id) {
        url = `${url}/${id}`;
      }
      fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: method,
        body: JSON.stringify(this.form)
      })
        .then(res => {
          this.$router.push({
            path: "/table"
          });
        })
        .catch(function(res) {
          console.log(res);
        });
    },
    onCancel() {
      this.$router.go(-1);
    },
    async fetchData() {
      const { params } = this.$router.history.current;
      if (params.id === undefined) {
        return;
      }
      const data = await fetch(
        `http://www.greatwebtech.cn:3000/useful_cmds/${params.id}`
      ).then(res => res.json());
      delete data.update_time;
      delete data.created_time;
      this.form = data;
    }
  }
};
</script>