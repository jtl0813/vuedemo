<template>
  <div class="processmanager">
    <div class="query">
      <h3>Query Conditions:</h3>
      <div style="margin: 20px 0;"></div>
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
      <h3>Query Result:</h3>
      <div style="margin: 20px 0;"></div>
      <el-button type="primary" @click="startProcess">Start Process</el-button>
      <el-button type="primary" @click="stopProcess">Stop Process</el-button>
      <el-button type="primary" @click="restartProcess">Restart Process</el-button><br>
      <div style="margin: 30px 0;"></div>
      <el-select v-model="process_sel"
                 multiple
                 placeholder="Choose Process">
        <el-option v-for="process in processes"
                   :label="process"
                   :value="process">
        </el-option>
      </el-select>     
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
      process_sel: []
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
.processmanager{
  display: flex;
  flex-direction: column;
}
</style>
