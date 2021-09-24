
<template>
  <i-editor 
  v-model="content" 
  :config="imageConfig"
  :before-upload="beforeUpdate"
  :img-url="imgUrl"
  @on-success="handleUploadSuccess"
  ></i-editor>
</template>

<script>
  export default {
    data () {
      return {
        content: '',
        imageConfig: {
          action: 'http://192.168.10.36:8087/api/file/upload',
          maxSize: 5120,
          uploadForm: {}
          }
        }
      },

      methods: {

        beforeUpdate(file) {
          console.log('beforeUpdate')
          console.log('file:', file)
          return "";
        },

        imgUrl(res) {
          let imgUrl = 'http://192.168.10.36:8089/wxapi/file/viewimg?fileId=' + res.data;
          return imgUrl;
        },

        handleUploadSuccess() {
          console.log('调用')
        }
      }
    }
</script>

<style>
textarea.ivu-input {
  height: 200px;
}
</style>

