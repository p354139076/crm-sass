<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import userAnylysis from '@/views/user_analysis'
export default {
	name: 'HomePage',
	components:{userAnylysis},
	data() {
		return {
			currentRole: 'userAnylysis'
		}
	},
	computed: {
		...mapGetters([
			'roles'
		])
	},
	created() {
		// if (!this.roles.includes('admin')) {
		// 	this.currentRole = 'editorDashboard'
		// }
	}
}
</script>
