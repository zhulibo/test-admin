import http from '@/axios'

// 上传文件
export function fileUpload(data: any) {
  return http.request({
    url: '/api/common/uploadFile',
    method: 'post',
    data
  })
}
