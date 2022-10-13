# digital-image-processor
웹 기반의 이미지 노이즈 생성 및 convolution 연산 기반의 필터 기능을 가진 시뮬레이터입니다. 

JavaScript의 Canvas API를 활용했습니다.

### 이미지 업로드
<img width="192" alt="스크린샷 2022-10-13 오전 9 30 43" src="https://user-images.githubusercontent.com/53702978/195478696-dca4cca4-7a45-484e-b83d-337536a4a7ee.png">

### 노이즈 적용

<table>
<tr>
  <th> salt and pepper noise </th>
  <th> gaussian noise </th>
</tr>
<tr>
  <td>
  <img width="192" alt="스크린샷 2022-10-13 오전 9 30 49" src="https://user-images.githubusercontent.com/53702978/195478705-41486d09-8293-4d31-989f-e33020172b4b.png">
  </td>
  <td>
   <img width="183" alt="스크린샷 2022-10-13 오전 9 30 58" src="https://user-images.githubusercontent.com/53702978/195478710-f8c3d949-d4c7-4552-bda9-37a2de1f3989.png">
  </td>
</tr>
</table>

### 필터 적용

<table>
<tr>
  <th> box filter </th>
  <th> gaussian filter </th>
  <th> median filter </th>
</tr>
<tr>
  <td>
<img width="184" alt="스크린샷 2022-10-13 오전 9 31 19" src="https://user-images.githubusercontent.com/53702978/195478715-836c46c8-5dcc-4ad3-95e2-66a2240c1c4d.png">
  </td>
  <td>
<img width="186" alt="스크린샷 2022-10-13 오전 9 31 41" src="https://user-images.githubusercontent.com/53702978/195478719-894ed713-467a-404f-b862-60c506c9c0cd.png">
  </td>
  <td>
<img width="181" alt="스크린샷 2022-10-13 오전 9 31 55" src="https://user-images.githubusercontent.com/53702978/195478722-f4b7e0ba-2017-4d9e-84bc-e7d888ea434e.png">
  </td>
</tr>
</table>
