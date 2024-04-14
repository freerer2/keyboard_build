# 제작 중단
### 기존에 있는거나 쓰기로 했음 케이스 모델링이 너무 힘들어서 여유되면 다시시작

# LAZYBOY36

아주 얇은 36키, 유선, 핫스왑, 모노블럭 스플릿, 컬럼스태거 기계식키보드

## Quick Links

## Features

## Bill of Materials (BOM)

# TODO-LIST

## PCB

-   [ ] 회로설계
    -   [x] 심볼 라이브러리 선정
        -   [x] MCU
        -   [x] Switch
        -   [x] Diode
    -   [x] 풋프린트 라이브러리 선정 
        -   [x] MCU
        -   [x] Switch
        -   [x] Diode
    -   [x] MCU GPIO PIN 할당
    -   [x] 매트릭스 설계
    -   [x] 심볼 풋프린트 할당
        -   [x] MCU
        -   [x] Switch
        -   [x] Diode
-   [ ] PCB설계
    -   [x] 풋프린트 정렬
        -   [x] MCU
        -   [x] Switch
        -   [x] Diode
    -   [x] 구리선 연결
    -   [x] 아웃라인 그리기
    -   [ ] M2홀 위치 선정
    -   [ ] Gerber 생성
    -   [ ] DXF 출력

## CASE

-   [ ] 모델링
    -   [ ] 상판
    -   [ ] 하판

## FIRMWARE

-   [ ] QMK
-   [ ] VIA

## ETC

-   [ ] README 작성
    -   [ ] Introduction
    -   [ ] Quick Links
        -   [ ] Build Guide
        -   [ ] Precompiled Firmware
    -   [ ] Features
    -   [ ] BOM

## NOTE
1. MCU는 promicro like으로 진행
2. 회로도는 크로우보드 참고
3. PCB는 크로우보드, Zerosprey42 참고
4. 스위치는 KS-33기준으로 진행(추후 PG1350도 고려해봄직 함...)
5. PCB의 외경과 케이스의 내경은 0.5mm의 여유를 주도록 해야할 듯 함(corne 케이스 참고)
6. 핫스왑소켓 구멍 뚫어놓을거 대비해서 PCB의 외경과의 간격을 1mm 이상 줘야 할 것 으로 보임
7. 스위치 높이 정보
    - 총 : 12.15 [+0.20 -0]
    - 상단 : 3.1
    - 중상 : 3.35 
    - 중하 : 2.50 [+-0.05]
    - 하단 : 3.2

8. 소켓 높이 정보
    - 총 : 3
    - 상단 : 1.15
    - 하단 : 1.85