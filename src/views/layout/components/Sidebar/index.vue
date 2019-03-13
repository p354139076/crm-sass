<!--  -->
<template>
  <el-menu
    class="barMenu"
    text-color="#FFFFFF"
  >
    <el-submenu
      v-for="(item,index) in itemList"
      :key="index"
      :index="index.toString()"
    >
      <template slot="title">
        <div>title</div>
      </template>
      <el-menu-item
        v-for="(subMenu,subIndex) in item.children"
        :key="subIndex"
        :index="subIndex.toString()"
      >
        subMenu
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import {loginTreeMenu} from '@/api/layout'
export default {
	name:'SideBar',
	data(){
		return {
			itemList:[]
		}
	},
	mounted(){
		loginTreeMenu().then(response=>{
			const data=response.data.data;
			this.itemList=data;
		});
	},
	methods:{
    
	}
}
</script>

<style rel='stylesheet/scss' lang='scss' scoped>
  .barMenu{
    background-color: #F7F7F7;
  }
</style>
