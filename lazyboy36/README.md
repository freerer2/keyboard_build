# LAZYBOY36

스플릿 키보드는 휴대시 trrs 케이블, USB 케이블, 오른쪽 키보드, 왼쪽 키보드  
아주 주렁주렁 정신이 없습니다.

이제는 USB 케이블과 키보드 한개만 챙기세요. Lazyboy36 입니다.

## Features

1. 당신의 손가락 건강을 위한 컬럼스태거 구조
2. 당신의 손목 건강을 위한 36키
3. 당신의 어깨 건강을 위한 스플릿 구조
4. 당신의 타건감 취향을 위한 핫스왑 지원
5. 빌드의 범용성을 위한 Pro Micro 모양의 MCU 지원
6. 배터리 걱정할 필요없는 ONLY 유선키보드
7. 그 유명한 Miryoku 배열의 키맵을 한국인의 손에 맞춘 개조판 펌웨어 기본 지원
    - [lazybones](https://github.com/freerer2/qmk_firmware/tree/master/users/lazybones)
8. ~~휴대성이 좋은 아주 얇은 키보드~~(증명필요)
    - ~~키캡 없이 범폰 포함 총 높이 : 약 14mm~~
    - ~~케이스 높이 : 6.6mm~~

## Quick Links

-   Ergogen Config: [config.yaml](config.yaml)
    -   Ergogen command
    ```bash
    ergogen . && for i in output/cases/*.jscad; do npx @jscad/cli@1 "$i" -of stla; done
    ```
-   PCB Design: [output/pcbs/lazyboy36.kicad_pcb](output/pcbs/lazyboy36.kicad_pcb)
-   3D Printable case: [output/cases/case.stl](output/cases/case.stl)
-   QMK Config: [qmk_config/](qmk_config/)

## Bill of Materials (BOM)

| Part name                         | Amount | Link                                                 |
| :-------------------------------- | -----: | :--------------------------------------------------- |
| MCU(such as the Pro Micro)        |      1 |                                                      |
| OLED(optional)                    |      1 |                                                      |
| Choc v1 switchs(PG1350)           |     36 |                                                      |
| Choc v1 keycaps                   |     36 | https://github.com/freerer2/choc_keycaps             |
| 1N4148 SOD123 or DO-35            |     36 | https://ko.aliexpress.com/item/1005002882901030.html |
| Kailh low profile hot-swap socket |     36 | https://ko.aliexpress.com/item/1005006345544915.html |
| Heated screw insert, M2x3x3.2     |      8 | https://ko.aliexpress.com/item/1005004870993068.html |
| Screws, M2 4mm                    |      8 | https://ko.aliexpress.com/item/4001248931159.html    |
| Black 10x2mm bumpon               |      8 | https://ko.aliexpress.com/item/1005005287385986.html |
| Button, 4x4x1.5                   |      1 | https://ko.aliexpress.com/item/1005003918757433.html |

# TODO-LIST

## ERGOGEN

-   [x] 키보드 정의

## PCB

-   [x] 라우팅

## FIRMWARE

-   [ ] QMK
-   [ ] ~~VIA~~(고민중)

## BUILD

-   [ ] 재료준비
    -   [ ] PCB
        -   [ ] MCU : RP2040 PROMICRO
        -   [ ] SWITCH : PG1350
        -   [ ] KEYCAPS : MBK
        -   [x] DIODE : SOD123
        -   [ ] HEADER PIN FEMALE : 315-43-112-41-003000
        -   [ ] HEADER PIN MALE : 3320-0-00-15-00-00-03-0
        -   [ ] HOTSWAP SOCKET
        -   [x] RST BUTTON
    -   [ ] CASE
        -   [ ] INSERT
        -   [ ] SCREWS
        -   [x] BUMPON

## ETC

-   [ ] README 작성
    -   [x] Introduction
    -   [x] Features
    -   [ ] Quick Links
        -   [x] ergogen config yaml
        -   [x] PCB
        -   [x] CASE
        -   [ ] Firmware
            -   [ ] QMK
            -   [ ] ~~VIA~~(고민중)
    -   [x] BOM
