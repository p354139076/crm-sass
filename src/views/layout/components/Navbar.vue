<!--  -->
<template>
  <el-row>
    <el-col :span="12">
      <img
        src="/"
        class="logo"
      >
      <div class="title">
        <span>渠道商管理平台</span>
      </div>
    </el-col>
    <el-col
      :span="12"
    >
      <div class="left-box">
        <div class="userImg">
          <img
            src="#"
          >
        </div>
        <div class="userName">
          <div>渠道名称 </div>
        </div>
        <div class="logOut">
          <span class="aliicon logoutIcon">&#xe619;</span>
          <span>退出</span>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
	name:'Navbar',
	data(){
		return {

		}
	}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .logoutIcon{
    float: left;
    display: block;
    width: 40px;
    height: 40px;
  }
  .logo{
    float: left;
    width: 200px;
    height: 70px;
    margin: 13px 16px 17px 30px;
  }
  .title{
    float: left;
    margin-top: 35px;
    width: 225px;
    height: 46px;
    line-height: 46px;
    color: rgba(245, 93, 84, 1);
    font-size: 32px;
    text-align: center;
  }
  .userImg{
    float: left;
    margin-top: 18px;
    width: 60px;
    height: 60px;
  }
  .userName{
    float: left;
    margin-top: 28px;
    width: 161px;
    height: 40px;
    line-height: 32px;
    color: rgba(16, 16, 16, 1);
    font-size: 22px;
    text-align: center;
  }
  .left-box{
    float: right;
  }
  .logOut{
  float: left;
  margin-top: 28px;
  width: 85px;
  font-weight: normal;
  height: 40px;
  line-height: 29px;
  color: rgba(255, 87, 34, 1);
  font-size: 20px;
  text-align: center;
  }
</style>
