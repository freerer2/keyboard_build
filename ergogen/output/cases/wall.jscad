function xlBoard_extrude_4_outline_fn(){
    return new CSG.Path2D([[43.7709519,-134.1112807],[63.0526887,-81.1351443]]).appendArc([64.6173225,-79.844107],{"radius":2,"clockwise":true,"large":false}).appendPoint([83.5555502,-76.8260823]).appendArc([84.0263808,-76.8072594],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.1426316,-78.2253687]).appendArc([102.6705926,-78.3398839],{"radius":2,"clockwise":true,"large":false}).appendPoint([126.5902488,-87.0459268]).appendArc([127.0682996,-87.2975698],{"radius":2,"clockwise":true,"large":false}).appendPoint([156.0179345,-107.9655299]).appendArc([156.7352288,-110.2773123],{"radius":2,"clockwise":true,"large":false}).appendPoint([152.4177262,-122.139553]).appendArc([154.2971115,-124.8235932],{"radius":2,"clockwise":false,"large":false}).appendPoint([163.2306925,-124.8235932]).appendArc([165.1100778,-122.139553],{"radius":2,"clockwise":false,"large":false}).appendPoint([160.7925753,-110.2773123]).appendArc([161.5098695,-107.9655299],{"radius":2,"clockwise":true,"large":false}).appendPoint([190.4595044,-87.2975698]).appendArc([190.9375552,-87.0459267],{"radius":2,"clockwise":true,"large":false}).appendPoint([214.8572114,-78.339884]).appendArc([215.3851724,-78.2253687],{"radius":2,"clockwise":true,"large":false}).appendPoint([233.5014233,-76.8072594]).appendArc([233.9722538,-76.8260823],{"radius":2,"clockwise":true,"large":false}).appendPoint([252.9104815,-79.844107]).appendArc([254.4751154,-81.1351444],{"radius":2,"clockwise":true,"large":false}).appendPoint([273.7568521,-134.1112807]).appendArc([273.1148942,-136.366554],{"radius":2,"clockwise":true,"large":false}).appendPoint([230.5520364,-169.8870051]).appendArc([230.3000355,-170.0561556],{"radius":2,"clockwise":true,"large":false}).appendPoint([177.1500356,-200.1503326]).appendArc([174.7503956,-199.8241626],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.2195583,-192.2933253]).appendArc([165.8053447,-191.7075389],{"radius":2,"clockwise":false,"large":false}).appendPoint([151.7224593,-191.7075389]).appendArc([150.3082457,-192.2933253],{"radius":2,"clockwise":false,"large":false}).appendPoint([142.7774084,-199.8241626]).appendArc([140.3777684,-200.1503325],{"radius":2,"clockwise":true,"large":false}).appendPoint([87.2277685,-170.0561557]).appendArc([86.9757676,-169.8870052],{"radius":2,"clockwise":true,"large":false}).appendPoint([44.4129098,-136.366554]).appendArc([43.7709518,-134.1112807],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function board_extrude_4_outline_fn(){
    return new CSG.Path2D([[46.3353298,-132.9133192],[64.2480337,-83.6985698]]).appendArc([65.8126675,-82.4075325],{"radius":2,"clockwise":true,"large":false}).appendPoint([84.7508952,-79.3895078]).appendArc([85.2217258,-79.3706849],{"radius":2,"clockwise":true,"large":false}).appendPoint([103.3379766,-80.7887942]).appendArc([103.8659376,-80.9033094],{"radius":2,"clockwise":true,"large":false}).appendPoint([124.0268232,-88.2412718]).appendArc([124.504874,-88.4929148],{"radius":2,"clockwise":true,"large":false}).appendPoint([153.4545089,-109.1608749]).appendArc([154.1718032,-111.4726573],{"radius":2,"clockwise":true,"large":false}).appendPoint([149.8543006,-123.334898]).appendArc([151.7336859,-126.0189382],{"radius":2,"clockwise":false,"large":false}).appendPoint([165.7941181,-126.0189382]).appendArc([167.6735034,-123.334898],{"radius":2,"clockwise":false,"large":false}).appendPoint([163.3560009,-111.4726573]).appendArc([164.0732951,-109.1608749],{"radius":2,"clockwise":true,"large":false}).appendPoint([193.02293,-88.4929148]).appendArc([193.5009808,-88.2412717],{"radius":2,"clockwise":true,"large":false}).appendPoint([213.6618664,-80.9033095]).appendArc([214.1898274,-80.7887942],{"radius":2,"clockwise":true,"large":false}).appendPoint([232.3060783,-79.3706849]).appendArc([232.7769088,-79.3895078],{"radius":2,"clockwise":true,"large":false}).appendPoint([251.7151365,-82.4075325]).appendArc([253.2797704,-83.6985699],{"radius":2,"clockwise":true,"large":false}).appendPoint([271.1924742,-132.9133192]).appendArc([270.5476448,-135.1708499],{"radius":2,"clockwise":true,"large":false}).appendPoint([228.1015862,-168.4738986]).appendArc([227.8517672,-168.641182],{"radius":2,"clockwise":true,"large":false}).appendPoint([177.1497883,-197.3227379]).appendArc([174.7508379,-196.9961777],{"radius":2,"clockwise":true,"large":false}).appendPoint([168.6337719,-190.8791117]).appendArc([167.2195583,-190.2933253],{"radius":2,"clockwise":false,"large":false}).appendPoint([150.3082457,-190.2933253]).appendArc([148.8940321,-190.8791117],{"radius":2,"clockwise":false,"large":false}).appendPoint([142.7769661,-196.9961777]).appendArc([140.3780157,-197.3227379],{"radius":2,"clockwise":true,"large":false}).appendPoint([89.6760368,-168.641182]).appendArc([89.4262178,-168.4738986],{"radius":2,"clockwise":true,"large":false}).appendPoint([46.9801592,-135.1708499]).appendArc([46.3353297,-132.9133193],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = board_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_case_fn();
            }

        