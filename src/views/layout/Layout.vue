<template>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <el-container>
      <el-header class="navbar-container">
        <navbar />
      </el-header>
      <el-container>
        <el-aside class="sidebar-container">
          <sidebar />
        </el-aside>
        <el-main class="main-container">
          <app-main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
	name: 'Layout',
	components: {
		Navbar,
		Sidebar,
		AppMain,
	},
	mixins: [ResizeMixin],
	computed: {
		sidebar() {
			return this.$store.state.app.sidebar
		},
		device() {
			return this.$store.state.app.device
		},
		classObj() {
			return {
				hideSidebar: !this.sidebar.opened,
				openSidebar: this.sidebar.opened,
				withoutAnimation: this.sidebar.withoutAnimation,
				mobile: this.device === 'mobile'
			}
		}
	},
	methods: {
		handleClickOutside() {
			this.$store.dispatch('closeSideBar', { withoutAnimation: false })
		}
	}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
    .navbar-container {
    height: 100px !important; 
    background-color:#F8F8F8;
  }
  .sidebar-container{
    margin-top: 32px;
    margin-right: 28px;
    margin-left: 28px;
    height: 658px;
    width: 232px !important;
    line-height: 20px;
    background-color: rgba(247, 247, 247, 1);
    text-align: center;
  }
  .main-container{
    margin-top: 32px;
    width: 1126px;
    line-height: 20px;
    text-align: center;
    border: 1px solid rgba(224, 224, 224, 1);
  }
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
