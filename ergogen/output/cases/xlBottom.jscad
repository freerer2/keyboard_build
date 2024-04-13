function xlBoard_extrude_2_outline_fn(){
    return new CSG.Path2D([[43.7709519,-134.1112807],[63.0526887,-81.1351443]]).appendArc([64.6173225,-79.844107],{"radius":2,"clockwise":true,"large":false}).appendPoint([83.5555502,-76.8260823]).appendArc([84.0263808,-76.8072594],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.1426316,-78.2253687]).appendArc([102.6705926,-78.3398839],{"radius":2,"clockwise":true,"large":false}).appendPoint([126.5902488,-87.0459268]).appendArc([127.0682996,-87.2975698],{"radius":2,"clockwise":true,"large":false}).appendPoint([156.0179345,-107.9655299]).appendArc([156.7352288,-110.2773123],{"radius":2,"clockwise":true,"large":false}).appendPoint([152.4177262,-122.139553]).appendArc([154.2971115,-124.8235932],{"radius":2,"clockwise":false,"large":false}).appendPoint([163.2306925,-124.8235932]).appendArc([165.1100778,-122.139553],{"radius":2,"clockwise":false,"large":false}).appendPoint([160.7925753,-110.2773123]).appendArc([161.5098695,-107.9655299],{"radius":2,"clockwise":true,"large":false}).appendPoint([190.4595044,-87.2975698]).appendArc([190.9375552,-87.0459267],{"radius":2,"clockwise":true,"large":false}).appendPoint([214.8572114,-78.339884]).appendArc([215.3851724,-78.2253687],{"radius":2,"clockwise":true,"large":false}).appendPoint([233.5014233,-76.8072594]).appendArc([233.9722538,-76.8260823],{"radius":2,"clockwise":true,"large":false}).appendPoint([252.9104815,-79.844107]).appendArc([254.4751154,-81.1351444],{"radius":2,"clockwise":true,"large":false}).appendPoint([273.7568521,-134.1112807]).appendArc([273.1148942,-136.366554],{"radius":2,"clockwise":true,"large":false}).appendPoint([230.5520364,-169.8870051]).appendArc([230.3000355,-170.0561556],{"radius":2,"clockwise":true,"large":false}).appendPoint([177.1500356,-200.1503326]).appendArc([174.7503956,-199.8241626],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.2195583,-192.2933253]).appendArc([165.8053447,-191.7075389],{"radius":2,"clockwise":false,"large":false}).appendPoint([151.7224593,-191.7075389]).appendArc([150.3082457,-192.2933253],{"radius":2,"clockwise":false,"large":false}).appendPoint([142.7774084,-199.8241626]).appendArc([140.3777684,-200.1503325],{"radius":2,"clockwise":true,"large":false}).appendPoint([87.2277685,-170.0561557]).appendArc([86.9757676,-169.8870052],{"radius":2,"clockwise":true,"large":false}).appendPoint([44.4129098,-136.366554]).appendArc([43.7709518,-134.1112807],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlBoard_extrude_2_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        