Blocks.surgeSmelter.outputItem = ItemStack(Items.scrap, 100);

Blocks.cryofluidMixer.outputLiquid = LiquidStack(Liquids.water, 2);

Blocks.navalFactory.plans.add(UnitFactory.UnitPlan(UnitTypes.block, 5 * 60, ItemStack.with()));

Blocks.sporePress.consumes.item(Items.phaseFabric, 1);

Blocks.forceProjector.radius = 1000;

UnitTypes.beta.health = 99999;

Blocks.titaniumConveyor.speed = 0.01;

Blocks.phaseConveyor.range = 4;

Blocks.invertedSorter.invert = false;
Blocks.sorter.invert = true;

Blocks.mechanicalPump.pumpAmount = 100;

Blocks.laserDrill.size = 4;
Blocks.blastDrill.size = 3;

Blocks.mechanicalDrill.tier = 5;
Blocks.blastDrill.tier = 2;

Blocks.waterExtractor.result = Liquids.slag;
Blocks.melter.outputLiquid = LiquidStack(Liquids.water, 2);

Blocks.pulverizer.outputItem = ItemStack(Items.scrap, 1);
Blocks.pulverizer.consumes.item(Items.sand, 1);

Blocks.incinerator.consumes.power(1000000);

Blocks.copperWall.absorbLasers = true;
Blocks.plastaniumWall.absorbLasers = false;

Blocks.oreLead.itemDrop = Items.copper;
Blocks.oreCopper.itemDrop = Items.lead;

Blocks.thoriumReactor.consumes.liquid(Liquids.slag, 0.02 / 1).update(false);
Blocks.thoriumReactor.heating = 0.02

const waterFloor = ["Blocks.deepwater", "Blocks.water", "Blocks.taintedWater", "Blocks.darksandTaintedWater", "Blocks.sandWater", "Blocks.darksandWater"];

var i;
for(i = 0; i < 6; i++){eval(waterFloor[i] + ".attributes.set(Attribute.heat, 0.85)"),
eval(waterFloor[i] + ".status = StatusEffects.burning")/*,
eval(waterFloor[i] + ".liquidDrop = Liquids.slag")*/
};

Blocks.slag.status = StatusEffects.wet;
Blocks.slag.liquidDrop = Liquids.water;
