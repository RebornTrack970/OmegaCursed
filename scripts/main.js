Vars.enableConsole = true;

// haha, have fun reading that (it's the same thing but all merged)

SectorPreset("maze", Planets.serpulo, 173).alwaysUnlocked = true;
UnitTypes.beta.health = 99999;
UnitTypes.poly.abilities.add(ForceFieldAbility(60, 0.3, 400, 60 * 6));
UnitTypes.alpha.abilities.add(UnitSpawnAbility(UnitTypes.flare, 60, 19.25, -31.75));
UnitTypes.poly.weapons.add(UnitTypes.corvus.weapons.get(0));
UnitTypes.corvus.weapons.get(0).reload = 3;
UnitTypes.spiroct.weapons.get(0).bullet.length = 1000;
UnitTypes.crawler.speed = 0;
UnitTypes.poly.flying = false;
UnitTypes.mace.armor = 20;
UnitTypes.nova.buildSpeed = 800;
UnitTypes.toxopid.legCount = 69;
UnitTypes.flare.engineOffset = -5.5;
UnitTypes.horizon.range = 10000;
UnitTypes.antumbra.health = 5;
UnitTypes.risso.drag = 31;
Vars.content.blocks().each(e => {e.health = 40});
Vars.content.blocks().each(e => {if(e.size === 4 ) {e.size = 2}});
Vars.state.rules.winWave = 3;
Vars.state.rules.waveTeam = Team.sharded;
Blocks.duo.ammo(Items.surgeAlloy, Bullets.missileSurge);
Blocks.scatter.reloadTime = 1;
Blocks.scatter.health = 1000;
Blocks.container.itemCapacity = 1;
Blocks.unloader.speed = 1000;
Blocks.thermalGenerator.attribute = Attribute.water;
Blocks.hail.targetAir = true;
Blocks.surgeSmelter.outputItem = ItemStack(Items.scrap, 100);
Blocks.cryofluidMixer.outputLiquid = LiquidStack(Liquids.water, 2);
Blocks.navalFactory.plans.add(UnitFactory.UnitPlan(UnitTypes.block, 5 * 60, ItemStack.with()));
Blocks.sporePress.consumes.item(Items.phaseFabric, 1);
Blocks.forceProjector.radius = 1000;
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
Blocks.thoriumReactor.heating = 0.02;
Blocks.payloadPropulsionTower.range = 2000;
Blocks.foreshadow.range = 50;
Blocks.fuse.range = 500;
Blocks.vault.itemCapacity = 50;
Blocks.container.itemCapacity = 3000;
Blocks.slag.status = StatusEffects.wet;
Blocks.slag.liquidDrop = Liquids.water;
Blocks.coreFoundation.size = 4;
Blocks.coreShard.unitCapModifier = 0;
Blocks.coreFoundation.unitCapModifier = 9999;
Blocks.coreNucleus.unitCapModifier = 1;
Blocks.surgeSmelter.consumes.items();
Blocks.graphitePress.consumes.items();
Blocks.oreScrap.itemDrop = Items.surgeAlloy;
Blocks.water.itemDrop = Items.blastCompound;
Blocks.water.liquidDrop = Liquids.cryofluid;
Blocks.solarPanel.powerProduction = 2000000;
Blocks.thoriumReactor.explosionRadius = 1000;
Blocks.navalFactory.plans.add(UnitFactory.UnitPlan(UnitTypes.eclipse, 5 * 60, ItemStack.with()));
Blocks.blockForge.buildVisibility = BuildVisibility.shown;
Blocks.conveyor.speed = 100000;
Blocks.kiln.outputItem = ItemStack(Items.sporePod,1);
Blocks.scorch.ammo(Items.sand, Bullets.basicFlame);
Blocks.wave.ammoTypes.get(Liquids.water).knockback = NaN;
Blocks.lancer.chargeTime = 1;
Blocks.meltdown.range = 999;
Blocks.meltdown.shootType.length = 999;
Blocks.overdriveDome.speedBoost = 21000000;
Blocks.mendProjector.healPercent = 0;
Blocks.shockMine.damage = 250000;
Blocks.massDriver.range = 30;
Blocks.itemBridge.range = 100;
Blocks.surgeTower.laserRange = 1;
Blocks.powerNode.laserRange = 40;
Blocks.battery.consumes.powerBuffered(5);
Blocks.impactReactor.powerProduction = 0;
Blocks.combustionGenerator.powerProduction = 1000;
Blocks.hotrock.liquidDrop = Liquids.slag;
// Blocks.thoriumReactor.consumes.liquid(Liquids.slag, 0.02 / 1).update(false);
Items.plastanium.flammability = 1000000;
Liquids.cryofluid.temperature = -2.73;
Liquids.slag.effect = StatusEffects.wet;
Blocks.router = extend(CoreBlock, "router", {});

const waterFloor = ["Blocks.deepwater", "Blocks.water", "Blocks.taintedWater", "Blocks.darksandTaintedWater", "Blocks.sandWater", "Blocks.darksandWater"];
for(var i = 0; i < 6; i++) {eval(waterFloor[i] + ".attributes.set(Attribute.heat, 0.85)"),
eval(waterFloor[i] + ".status = StatusEffects.burning")/*,
eval(waterFloor[i] + ".liquidDrop = Liquids.slag")*/
};

const amogus = new Planet("amogus", Planets.sun, 2)
amogus.generator = new SerpuloPlanetGenerator();
amogus.accessible = true;
amogus.atmosphereColor = Color.valueOf("ff000022");
amogus.startSector = 10;
amogus.atmosphereRadIn = 0.1;
amogus.atmosphereRadOut = 0.3;

// do the funny (1% chance)
Events.on(EventType.ClientLoadEvent, () => {
	if (Math.random()*100 < 1) {Core.app.openURI("https://bit.ly/gdy2ibdiy")}
})
