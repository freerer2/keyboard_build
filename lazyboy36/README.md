# LAZYBOY36

아주 얇은 36키, 유선, 핫스왑, 모노블럭 스플릿, 컬럼스태거 기계식키보드

## Ergogen command
```bash
ergogen . && for i in output/cases/*.jscad; do npx @jscad/cli@1 "$i" -of stla; done
```

## Quick Links
- Ergogen Config: [config.yaml](config.yaml)
- PCB Design: [output/pcbs/lazyboy36.kicad_pcb](output/pcbs/lazyboy36.kicad_pcb)
- 3D Printable case: [output/cases/case.stl](output/cases/case.stl)
- QMK Config: [qmk_config/](qmk_config/)
  
## Features

## Bill of Materials (BOM)
|Part name                        |Amount|Link                                                |
|:--------------------------------|-----:|:---------------------------------------------------|
|MCU                              | 1    |                                                    |
|OLED(optional)                   | 1    |                                                    |
|1N4148 SOD123 or DO-35           | 36   |https://ko.aliexpress.com/item/1005002882901030.html|
|Kailh low profile hot-swap socket| 36   |https://ko.aliexpress.com/item/1005006345544915.html|
|Heated screw insert, M2x2x3.2    | 8    |https://ko.aliexpress.com/item/1005004870993068.html|
|Screws, M2 3mm                   | 8    |https://ko.aliexpress.com/item/4001248931159.html   |
|Black 10x2mm bumpon              | 8    |https://ko.aliexpress.com/item/1005005287385986.html|
|Button, 4x4x1.5                  | 1    |https://ko.aliexpress.com/item/1005003918757433.html|

# TODO-LIST

## PCB

-   [x] 라우팅

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