## Recoil을 사용한 ToDoList 관리

Recoil을 사용하는것은 처음이기에 ToDoList로 몸풀기로 강의를 들으면서 만들었습니다.

스타일링은 하지 않았습니다. React-Recoil 기능 구현에 초점을 두고 작성하였습니다.

toDo는 Text, Category, id로 구성이 되어있습니다.

또한 toDos의 저장은 localstorage를 사용해 저장을 하고있습니다.


-----
## 실제 가동 영상
[screen-recording (1).webm](https://user-images.githubusercontent.com/87063105/188726454-d98c6c71-7a79-4654-8bbb-10e210132d45.webm)



----
## atoms 관리

### TypeScript 설정

![image](https://user-images.githubusercontent.com/87063105/188718046-62a5b3c5-0c3b-42f6-8f53-15366d5a7ca4.png)

### Atoms, Selector

![image](https://user-images.githubusercontent.com/87063105/188717940-51ab5a49-adce-4290-bac2-3940e36a1187.png)

----

## ToDoList

toDos는 Recoil의 atom 데이터를 가져오고있습니다.
다만 toDos는 전체 데이터를 불러오고 있지 않습니다.

toDos는 TO_DO, DOING, DONE 이라는 세 가지 카테고리로 나뉘어져있는데

현재 내가 있는 카테고리에 있는 toDos만 출력을 하도록 Selector를 설정해두었습니다.

또한 카테고리를 선택하고 저장하는 로직은 useRecoilState로 관리되고있습니다.

React의 useState와 매우 흡사한 함수이므로 쉽게 쓸 수 있었습니다.

![image](https://user-images.githubusercontent.com/87063105/188719483-a920db90-2a80-4d83-937f-a86c3b7049d7.png)

![image](https://user-images.githubusercontent.com/87063105/188720357-2706a27f-afbe-403f-8a99-245f4364ae46.png)

input 변화를 감지하는 간단한 함수를 만들어 category를 컨트롤 할 수 있게 설정해두었습니다.

하지만 Option에서 value를 문자열로 보관하는 것에는 오류가 있을 수 있기에 enum, TypeScript를 사용해 관리하여 오류를 최소화 시켰습니다.
![image](https://user-images.githubusercontent.com/87063105/188720736-5fc1fba9-e0e8-4c03-86ba-52f6b6e23dec.png)

----

## CreateToDo

toDo를 작성하기 위해서 우선 atom에서 setRecoilState를 사용해야 할 필요가 있었습니다.

기존 배열에서 새로운 데이터를 넣은 **새로운 배열**이 필요하기 때문입니다.

새로운 배열을 return 하여 재랜더링으로 변화를 보여질 수 있어야 합니다.

![image](https://user-images.githubusercontent.com/87063105/188721833-64ba321c-b8c8-4b7b-bfed-b5c575aaa386.png)

localstorage.setItem() 과 getItem을 사용하여 새로운 배열을 만들고 내뱉을 수 있도록 만들었습니다.

Create에 사용한 HTML FORM에 대한 validation, event에 대한 설정 또한 새로운 기술을 사용하였습니다.

![image](https://user-images.githubusercontent.com/87063105/188722265-e20507a8-13a9-43c4-8e2c-3b1b1b4bad16.png)

![image](https://user-images.githubusercontent.com/87063105/188722498-92f5ec7c-be0c-442a-a505-aff70a23ed5a.png)


**react-hook-form**을 사용하여 **validation, input**에 관한 관리에 대한 편의성을 증가시켰고 코드도 짧고 보기 편해졌습니다.



------

## ToDo

ToDo의 상태는 계속해서 바뀌어야 했습니다.

TO_DO => DOING => DONE 세 가지 상태는 내 마음대로 바꿀 수 있어야했습니다.

하지만 배열을 **Mutation을 발생시키지 않고** 새로운 배열을 생성시켜 return 시켜야 합니다.

그래서 **findIndex, slice**를 사용하여 배열을 새롭게 만들었습니다.

![image](https://user-images.githubusercontent.com/87063105/188725057-2f4c2cd8-7653-4615-8f0b-5d2f1073ce72.png)

또한 삭제도 localstorage를 새롭게 선언하여 내뱉게 하였습니다.


