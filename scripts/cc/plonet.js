const tantros = new Planet("tantros", Planets.sun, 2, 0.8)
tantros.generator = new TantrosPlanetGenerator();
tantros.meshLoader = () => new HexMesh(this, 4);
tantros.atmosphereColor = Color.valueOf("3db899");
tantros.startSector = 10;
tantros.atmosphereRadIn = -0.01;
tantros.atmosphereRadOut = 0.3;