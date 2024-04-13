function board_extrude_2_outline_fn(){
    return new CSG.Path2D([[46.3353298,-132.9133192],[64.2480337,-83.6985698]]).appendArc([65.8126675,-82.4075325],{"radius":2,"clockwise":true,"large":false}).appendPoint([84.7508952,-79.3895078]).appendArc([85.2217258,-79.3706849],{"radius":2,"clockwise":true,"large":false}).appendPoint([103.3379766,-80.7887942]).appendArc([103.8659376,-80.9033094],{"radius":2,"clockwise":true,"large":false}).appendPoint([124.0268232,-88.2412718]).appendArc([124.504874,-88.4929148],{"radius":2,"clockwise":true,"large":false}).appendPoint([153.4545089,-109.1608749]).appendArc([154.1718032,-111.4726573],{"radius":2,"clockwise":true,"large":false}).appendPoint([149.8543006,-123.334898]).appendArc([151.7336859,-126.0189382],{"radius":2,"clockwise":false,"large":false}).appendPoint([165.7941181,-126.0189382]).appendArc([167.6735034,-123.334898],{"radius":2,"clockwise":false,"large":false}).appendPoint([163.3560009,-111.4726573]).appendArc([164.0732951,-109.1608749],{"radius":2,"clockwise":true,"large":false}).appendPoint([193.02293,-88.4929148]).appendArc([193.5009808,-88.2412717],{"radius":2,"clockwise":true,"large":false}).appendPoint([213.6618664,-80.9033095]).appendArc([214.1898274,-80.7887942],{"radius":2,"clockwise":true,"large":false}).appendPoint([232.3060783,-79.3706849]).appendArc([232.7769088,-79.3895078],{"radius":2,"clockwise":true,"large":false}).appendPoint([251.7151365,-82.4075325]).appendArc([253.2797704,-83.6985699],{"radius":2,"clockwise":true,"large":false}).appendPoint([271.1924742,-132.9133192]).appendArc([270.5476448,-135.1708499],{"radius":2,"clockwise":true,"large":false}).appendPoint([228.1015862,-168.4738986]).appendArc([227.8517672,-168.641182],{"radius":2,"clockwise":true,"large":false}).appendPoint([177.1497883,-197.3227379]).appendArc([174.7508379,-196.9961777],{"radius":2,"clockwise":true,"large":false}).appendPoint([168.6337719,-190.8791117]).appendArc([167.2195583,-190.2933253],{"radius":2,"clockwise":false,"large":false}).appendPoint([150.3082457,-190.2933253]).appendArc([148.8940321,-190.8791117],{"radius":2,"clockwise":false,"large":false}).appendPoint([142.7769661,-196.9961777]).appendArc([140.3780157,-197.3227379],{"radius":2,"clockwise":true,"large":false}).appendPoint([89.6760368,-168.641182]).appendArc([89.4262178,-168.4738986],{"radius":2,"clockwise":true,"large":false}).appendPoint([46.9801592,-135.1708499]).appendArc([46.3353297,-132.9133193],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_2_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        