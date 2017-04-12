<template>
  <div class="processmanager">
    <div class="query">
      <h3>Query Conditions</h3>
      <el-select v-model="pss_sel"
                 multiple
                 placeholder="Choose Process System">
        <el-option v-for="ps in pss"
                   :label="ps"
                   :value="ps">
        </el-option>
      </el-select>
      <el-select v-model="pms_sel"
                 multiple
                 placeholder="Choose Process Module">
        <el-option v-for="pm in pms"
                   :label="pm"
                   :value="pm">
        </el-option>
      </el-select>
      <el-select v-model="pas_sel"
                 multiple
                 placeholder="Choose Process Application">
        <el-option v-for="pa in pas"
                   :label="pa"
                   :value="pa">
        </el-option>
      </el-select>
      <el-button type="primary" @click="queryProcess">Query Process</el-button>
    </div>
    <div class="result">
      <h3>Query Result</h3>
      <el-button type="primary">Start</el-button>
      <el-button type="primary">Shutdown</el-button>
      <el-button type="primary">Restart</el-button><br>
      <el-checkbox-group max=100 v-model="process_checked" v-for="process in processes">
        <el-checkbox :label="process"></el-checkbox>
      </el-checkbox-group>
      {{process_checked}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'processmanager',
  data () {
    return {
      pss: null,
      pms: null,
      pas: null,
      pss_sel: null,
      pms_sel: null,
      pas_sel: null,
      processes: null,
      process_checked: null
    }
  },
  created: function () {
    this.fetchConditonData()
  },
  methods: {
    fetchConditonData: function () {
      var self = this
      this.$ajax.post('http://127.0.0.1:8081/pbs/getcondition/')
        .then(function (response) {
          console.log('result', response)
          self.pss = response['data']['ps']
          self.pms = response['data']['pm']
          self.pas = response['data']['pa']
        })
        .catch(function (error) {
          alert(error)
        })
    },
    queryProcess: function () {
      var self = this
      this.$ajax.post('http://127.0.0.1:8081/pbs/getapp/')
        .then(function (response) {
          console.log('result', response)
          self.processes = response['data']['process']
        })
        .catch(function (error) {
          alert(error)
        })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
