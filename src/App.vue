<template>
  <div id="app">
    <el-menu theme="dark"
             :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect"
             router="true">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="processmanager">ProcessManager</el-menu-item>
      <el-menu-item index="logmanager">LogManager</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
