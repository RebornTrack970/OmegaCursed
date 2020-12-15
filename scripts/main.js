Vars.enableConsole = true;

const tantros = new Planet("tantros", Planets.sun, 2, 0.8);
tantros.generator = new TantrosPlanetGenerator();
tantros.meshLoader = () => new HexMesh(this, 4);
tantros.atmosphereColor = Color.valueOf("3db899");
tantros.startSector = 10;
tantros.atmosphereRadIn = -0.01;
tantros.atmosphereRadOut = 0.3;

Vars.content.blocks().each(e => {e.health = 40});
Vars.content.blocks().each(e => {
    if(e.size === 4 ) e.size = 2;
});
Blocks.coreFoundation.size = 4;
Blocks.coreShard.unitCapModifier = 0;
Blocks.coreFoundation.unitCapModifier = 9999;
Blocks.coreNucleus.unitCapModifier = 1;

Blocks.surgeSmelter.consumes.items();
Blocks.graphitePress.consumes.items();

Blocks.oreScrap.itemDrop = Items.surgeAlloy;
Blocks.water.itemDrop = Items.blastCompound;
Blocks.water.liquidDrop = Liquids.cryofluid;

SectorPreset("maze", Planets.serpulo, 173);

Blocks.solarPanel.powerProduction = 20000000;

Blocks.thoriumReactor.explosionRadius = 1000;

Blocks.navalFactory.plans.add(UnitFactory.UnitPlan(UnitTypes.eclipse, 5 * 60, ItemStack.with()));

UnitTypes.poly.abilities.add(ForceFieldAbility(60, 0.3, 400, 60 * 6));
UnitTypes.alpha.abilities.add(UnitSpawnAbility(UnitTypes.flare, 60, 19.25, -31.75));

Vars.state.rules.waveTeam = Team.sharded;

Blocks.blockForge.buildVisibility = BuildVisibility.shown;
Blocks.conveyor.speed = 100000;

Blocks.kiln.outputItem = ItemStack(Items.sporePod,1);

Blocks.scorch.ammo(Items.sand, Bullets.basicFlame);


UnitTypes.poly.weapons.add(UnitTypes.corvus.weapons.get(0));
UnitTypes.corvus.weapons.get(0).reload = 3;

Vars.state.rules.winWave = 3;

Blocks.wave.ammoTypes.get(Liquids.water).knockback = NaN;
UnitTypes.spiroct.weapons.get(0).bullet.length = 1000;

Blocks.lancer.chargeTime = 1;

UnitTypes.crawler.speed = 0;

Blocks.meltdown.range = 999;
Blocks.meltdown.shootType.length = 999;

UnitTypes.poly.flying =false;

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



























