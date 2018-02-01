export default {
  activated () {
    this.handleDownload()
  },
  methods: {
    handleDownload () {
      throw new Error('使用Download组件需要对组件的方法进行重写')
    }
  }
}
