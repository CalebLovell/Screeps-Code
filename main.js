var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleMiner = require('role.miner');
var roleCourier = require('role.courier');
var roleWorker = require('role.worker');
var roleAttacker = require('role.attacker');
var roleHealer = require('role.healer');
var roleClaimer = require('role.claimer');
var roleClaimer2 = require('role.claimer2');
var roleFlex = require('role.flex');

var roleSpawn2southMiner = require('role.spawn2southMiner');
var roleNorthcur = require('role.northcur');
var roleNorthroam = require('role.northroam');

var roleNorth2miner = require('role.north2miner');
var roleMidFarmer = require('role.midFarmer');
var roleNorth2roam = require('role.north2roam');

var roleNorthwestminer = require('role.northwestminer');
var roleNorthwestcur = require('role.northwestcur');
var roleNorthwestroam = require('role.northwestroam');

var roleWestminer = require('role.westminer');
var roleWestcur = require('role.westcur');
var roleWestroam = require('role.westroam');

// require('attackSomeOne')();



// var units = ['harvester', 'upgrader', 'builder'];
// Memory.lifeCount = {};
// for (var unit in units) {
//   Memory.lifeCount[units[unit]] = 1;
// }

module.exports.loop = function() {
  //
  // spawnAttackers('E53S49',0,1);
  //
  // /* ------- TOWER MAIN ------- */
  //
  // var hostiles1 = Game.rooms['E54S49'].find(FIND_HOSTILE_CREEPS);
  // var myHurtCreeps = Game.rooms['E54S49'].find(FIND_MY_CREEPS, {
  //   filter: function(hurtedCreep) {
  //     return hurtedCreep.hits < hurtedCreep.hitsMax;
  //   }
  // });
  // var towers = Game.rooms['E54S49'].find(FIND_MY_STRUCTURES, {
  //   filter: {
  //     structureType: STRUCTURE_TOWER
  //   }
  // });
  // if(hostiles1.length > 0 && hostiles1.owner != 'cluelesswalnut' || 'LightLemmonDrop') {
  //   towers.forEach(tower => tower.attack(hostiles1[0]));
  // }
  // else if(myHurtCreeps.length > 0) {
  //   towers.forEach(tower => tower.heal(myHurtCreeps[0]));
  // }
  //
  // /* ------- TOWER 2ND ROOM ------- */
  //
  // var hostiles2 = Game.rooms['E55S47'].find(FIND_HOSTILE_CREEPS);
  // var myHurtCreeps2 = Game.rooms['E55S47'].find(FIND_MY_CREEPS, {
  //   filter: function(hurtedCreep) {
  //     return hurtedCreep.hits < hurtedCreep.hitsMax;
  //   }
  // });
  // var damagedRamparts2HP = 100000
  // var damagedRamparts2 = Game.rooms['E55S47'].find(FIND_STRUCTURES, {
  //   filter: (s) => (s.structureType == STRUCTURE_RAMPART) && s.hits < damagedRamparts2HP
  // });
  // var towers2 = Game.rooms['E55S47'].find(FIND_MY_STRUCTURES, {
  //   filter: {
  //     structureType: STRUCTURE_TOWER
  //   }
  // });
  // if(hostiles2.length > 0 && hostiles2.owner != 'cluelesswalnut' || 'LightLemmonDrop') {
  //   towers2.forEach(tower => tower.attack(hostiles2[0]));
  // }
  // if(myHurtCreeps2.length > 0) {
  //   towers2.forEach(tower => tower.heal(myHurtCreeps2[0]));
  // }
  // // if(damagedRamparts2.length > 0) {
  // //   towers2.forEach(tower => tower.repair(damagedRamparts2[0]));
  // // }
  //
  // /* ------- TOWER 3RD ROOM ------- */
  //
  // var hostiles2 = Game.rooms['E51S46'].find(FIND_HOSTILE_CREEPS);
  // var myHurtCreeps2 = Game.rooms['E51S46'].find(FIND_MY_CREEPS, {
  //   filter: function(hurtedCreep) {
  //     return hurtedCreep.hits < hurtedCreep.hitsMax;
  //   }
  // });
  // var damagedRamparts2HP = 100000
  // var damagedRamparts2 = Game.rooms['E51S46'].find(FIND_STRUCTURES, {
  //   filter: (s) => (s.structureType == STRUCTURE_RAMPART) && s.hits < damagedRamparts2HP
  // });
  // var towers2 = Game.rooms['E51S46'].find(FIND_MY_STRUCTURES, {
  //   filter: {
  //     structureType: STRUCTURE_TOWER
  //   }
  // });
  // if(hostiles2.length > 0 && hostiles2.owner != 'cluelesswalnut' || 'LightLemmonDrop') {
  //   towers2.forEach(tower => tower.attack(hostiles2[0]));
  // }
  // if(myHurtCreeps2.length > 0) {
  //   towers2.forEach(tower => tower.heal(myHurtCreeps2[0]));
  // }
  // // if(damagedRamparts2.length > 0) {
  // //   towers2.forEach(tower => tower.repair(damagedRamparts2[0]));
  // // }

  /* ------- OLD CREEP MEMORY DELETE ------- */

  for (let name in Memory.creeps) {
    if (Game.creeps[name] == undefined) {
      delete Memory.creeps[name];
      console.log(`${name} died. Memory cleared.`);
    }
  }

  /* ------- CREEP ROLE ASSIGN ------- */

  for (let name in Game.creeps) {
    var creep = Game.creeps[name];

    if (creep.memory.role == 'harvester') {
      roleHarvester.run(creep);
    } else if (creep.memory.role == 'upgrader') {
      roleUpgrader.run(creep);
    } else if (creep.memory.role == 'builder') {
      roleBuilder.run(creep);
    } else if (creep.memory.role == 'repairer') {
      roleRepairer.run(creep);
    } else if (creep.memory.role == 'miner') {
      roleMiner.run(creep);
    } else if (creep.memory.role == 'courier') {
      roleCourier.run(creep);
    } else if (creep.memory.role == 'worker') {
      roleWorker.run(creep);
    } else if (creep.memory.role == 'spawn2southMiner') {
      roleSpawn2southMiner.run(creep);
    } else if (creep.memory.role == 'northcur') {
      roleNorthcur.run(creep);
    } else if (creep.memory.role == 'northroam') {
      roleNorthroam.run(creep);
    } else if (creep.memory.role == 'north2miner') {
      roleNorth2miner.run(creep);
    } else if (creep.memory.role == 'midFarmer') {
      roleMidFarmer.run(creep);
    } else if (creep.memory.role == 'north2roam') {
      roleNorth2roam.run(creep);
    } else if (creep.memory.role == 'westminer') {
      roleWestminer.run(creep);
    } else if (creep.memory.role == 'westcur') {
      roleWestcur.run(creep);
    } else if (creep.memory.role == 'westroam') {
      roleWestroam.run(creep);
    } else if (creep.memory.role == 'northwestminer') {
      roleNorthwestminer.run(creep);
    } else if (creep.memory.role == 'northwestroam') {
      roleNorthwestroam.run(creep);
    } else if (creep.memory.role == 'northwestcur') {
      roleNorthwestcur.run(creep);
    } else if (creep.memory.role == 'attacker') {
      roleAttacker.run(creep);
    } else if (creep.memory.role == 'healer') {
      roleHealer.run(creep);
    } else if (creep.memory.role == 'claimer') {
      roleClaimer.run(creep);
    } else if (creep.memory.role == 'claimer2') {
      roleClaimer2.run(creep);
    } else if (creep.memory.role == 'flex') {
      roleFlex.run(creep);
    }

  }



  var minimumNumberOfUpgraders = 7;

  var minimumNumberOfHarvesters = 2;
  var minimumNumberOfFlex = 1;
  var minimumNumberOfSpawn2southMiner = 2;
  var minimumNumberOfNorthcur = 4; // spawn2south couriers
  var minimumNumberOfMidFarmer = 5;


  var minimumNumberOfMiners = 2;
  var minimumNumberOfCouriers = 1;
  var minimumNumberOfWorkers = 1;
  var minimumNumberOfBuilders = 1;
  var minimumNumberOfRepairers = 0;

  var minimumNumberOfWestminer = 2;
  var minimumNumberOfWestcur = 3;
  var minimumNumberOfClaimers = 1;  // west claimer


  var minimumNumberOfNorthwestminer = 0;
  var minimumNumberOfNorthwestcur = 0;
  var minimumNumberOfNorthwestroam = 0;

  var minimumNumberOfNorth2miner = 2; // east room miners
  var minimumNumberOfNorthroam = 3; // east room couriers
  var minimumNumberOfClaimers2 = 1;  // east claimer

  var minimumNumberOfWestroam = 0;
  var minimumNumberOfNorth2roam = 0;


  var minimumNumberOfAttackers = 0;
  var minimumNumberOfHealers = 0;






  // _.sum counts the number of properties in Game.creeps filtered by the
  // arrow function, which checks for the creep being a whatever role it is

  var numberOfMiners = _.sum(Game.creeps, (c) => c.memory.role == 'miner');
  var numberOfCouriers = _.sum(Game.creeps, (c) => c.memory.role == 'courier');
  var numberOfWorkers = _.sum(Game.creeps, (c) => c.memory.role == 'worker');
  var numberOfBuilders = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
  var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');

  var numberOfAttackers = _.sum(Game.creeps, (c) => c.memory.role == 'attacker');
  var numberOfHealers = _.sum(Game.creeps, (c) => c.memory.role == 'healer');
  var numberOfClaimers = _.sum(Game.creeps, (c) => c.memory.role == 'claimer');
  var numberOfClaimers2 = _.sum(Game.creeps, (c) => c.memory.role == 'claimer2');
  var numberOfFlex = _.sum(Game.creeps, (c) => c.memory.role == 'flex');

  var numberOfSpawn2southMiner = _.sum(Game.creeps, (c) => c.memory.role == 'spawn2southMiner');
  var numberOfNorthcur = _.sum(Game.creeps, (c) => c.memory.role == 'northcur');
  var numberOfNorthroam = _.sum(Game.creeps, (c) => c.memory.role == 'northroam');

  var numberOfNorth2miner = _.sum(Game.creeps, (c) => c.memory.role == 'north2miner');
  var numberOfMidFarmer = _.sum(Game.creeps, (c) => c.memory.role == 'midFarmer');
  var numberOfNorth2roam = _.sum(Game.creeps, (c) => c.memory.role == 'north2roam');

  var numberOfWestminer = _.sum(Game.creeps, (c) => c.memory.role == 'westminer');
  var numberOfWestcur = _.sum(Game.creeps, (c) => c.memory.role == 'westcur');
  var numberOfWestroam = _.sum(Game.creeps, (c) => c.memory.role == 'westroam');

  var numberOfNorthwestminer = _.sum(Game.creeps, (c) => c.memory.role == 'northwestminer');
  var numberOfNorthwestcur = _.sum(Game.creeps, (c) => c.memory.role == 'northwestcur');
  var numberOfNorthwestroam = _.sum(Game.creeps, (c) => c.memory.role == 'northwestroam');

  var numberOfHarvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
  var numberOfUpgraders = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
  var numberOfRepairers = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');

  var survivalCreeps = _.sum(Game.creeps, (c) => c.memory.role == 'miner') + _.sum(Game.creeps, (c) => c.memory.role == 'courier');

  // console.log(`harvesters: ${numberOfHarvesters} upgraders: ${numberOfUpgraders} builders: ${numberOfBuilders} repairers: ${numberOfRepairers} miners: ${numberOfMiners} couriers: ${numberOfCouriers} workers: ${numberOfWorkers}`)
  console.log(`miners: ${numberOfMiners} couriers: ${numberOfCouriers} workers: ${numberOfWorkers} builders: ${numberOfBuilders} repairer: ${numberOfRepairers} west: ${numberOfWestminer}-${numberOfWestcur}-${numberOfWestroam} northwest: ${numberOfNorthwestminer}-${numberOfNorthwestcur}-${numberOfNorthwestroam} north: ${numberOfNorthroam}`)
//north: ${numberOfspawn2southMiner}-${numberOfNorthcur}-${numberOfNorthroam} north2: ${numberOfNorth2miner}-${numberOfMidFarmer}-${numberOfNorth2roam}
  console.log(`harv: ${numberOfHarvesters} flex: ${numberOfFlex} spawn2southMiner: ${numberOfSpawn2southMiner} Northcur: ${numberOfNorthcur} MidFarmer: ${numberOfMidFarmer} `)

  // // spawn 4
  // if (numberOfNorth2miner < minimumNumberOfNorth2miner) {
  //   // var newName = 'NorthTwominer' + Memory.lifeCount['harvester'];
  //   if (Game.spawns.Spawn4.createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE], newName, {
  //       role: 'north2miner',
  //       working: false,
  //       HAVE_LOAD: false
  //     }) == OK); {
  //     Memory.lifeCount['harvester']++;
  //   }
  // }
  // else if (numberOfNorthroam < minimumNumberOfNorthroam) {
  //   var newName = 'Northroam' + Memory.lifeCount['harvester'];
  //   if (Game.spawns.Spawn4.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK,
  //   MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName, {
  //       role: 'northroam',
  //       working: false,
  //       HAVE_LOAD: false
  //     }) == OK); {
  //     Memory.lifeCount['harvester']++;
  //   }
  // }
  // else if (numberOfClaimers2 < minimumNumberOfClaimers2) {
  //   var newName = 'Claima2' + Memory.lifeCount['harvester'];
  //   if (Game.spawns.Spawn4.createCreep([CLAIM, CLAIM, MOVE, MOVE], newName, {
  //       role: 'claimer2',
  //       HAVE_LOAD: false
  //     }) == OK); {
  //     Memory.lifeCount['harvester']++;
  //   }
  // }
  // else if (numberOfWorkers < minimumNumberOfWorkers) {
  //   var newName = 'Worka' + Memory.lifeCount['harvester'];
  //   if (Game.spawns.Spawn4.createCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
  //     MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName, {
  //       role: 'worker',
  //       working: false,
  //       HAVE_LOAD: false
  //     }) == OK); {
  //     Memory.lifeCount['harvester']++;
  //   }
  // }
  //
  // // spawn 3
  // if (numberOfUpgraders < 1) {
  //   var newName = 'Upgrada' + Memory.lifeCount['upgrader'];
  //   if (Game.spawns.Spawn3.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], newName, {
  //       role: 'upgrader',
  //       HAVE_LOAD: false
  //     }) == OK); {
  //     Memory.lifeCount['upgrader']++;
  //   }
  // }
  // else if (numberOfUpgraders < minimumNumberOfUpgraders) {
  //   var newName = 'Upgrada' + Memory.lifeCount['upgrader'];
  //   if (Game.spawns.Spawn3.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName, {
  //       role: 'upgrader',
  //       HAVE_LOAD: false
  //     }) == OK); {
  //     Memory.lifeCount['upgrader']++;
  //   }
  // }
  //
  //
  // // spawn 2
  // if (numberOfHarvesters < minimumNumberOfHarvesters) {
  //   var newName = 'Harv' + Memory.lifeCount['harvester'];
  //   if (Game.spawns.Spawn2.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName, {
  //       role: 'harvester',
  //       working: false,
  //       HAVE_LOAD: false
  //     }) == OK); {
  //     Memory.lifeCount['harvester']++;
  //   }
  // }
  // else if (numberOfFlex < minimumNumberOfFlex) {
  //   var newName = 'Flex' + Memory.lifeCount['builder'];
  //   if (Game.spawns.Spawn2.createCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], newName, {
  //       role: 'flex',
  //       working: false,
  //       HAVE_LOAD: false
  //     }) == OK); {
  //     Memory.lifeCount['builder']++;
  //   }
  // }
  // else if (numberOfSpawn2southMiner < minimumNumberOfSpawn2southMiner) {
  //   var newName = 'spawn2southMiner' + Memory.lifeCount['harvester'];
  //   if (Game.spawns.Spawn2.createCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE], newName, {
  //       role: 'spawn2southMiner',
  //       working: false,
  //       HAVE_LOAD: false
  //     }) == OK); {
  //     Memory.lifeCount['harvester']++;
  //   }
  // }
  // else if (numberOfNorthcur < minimumNumberOfNorthcur) {
  //   var newName = 'Northcur' + Memory.lifeCount['harvester'];
  //   if (Game.spawns.Spawn2.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName, {
  //       role: 'northcur',
  //       working: false,
  //       HAVE_LOAD: false
  //     }) == OK); {
  //     Memory.lifeCount['harvester']++;
  //   }
  // }
  // else if (numberOfMidFarmer < minimumNumberOfMidFarmer) {
  //   var newName = 'MidFarmer' + Memory.lifeCount['harvester'];
  //   if (Game.spawns.Spawn2.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, WORK, WORK, WORK, WORK,
  //      MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName, {
  //       role: 'midFarmer',
  //       working: false,
  //       HAVE_LOAD: false
  //     }) == OK); {
  //     Memory.lifeCount['harvester']++;
  //   }
  // }


 // spawn 1
  if (numberOfCouriers < minimumNumberOfCouriers) {
    // var newName = 'Cur' + Memory.lifeCount['harvester'];
    if (Game.spawns.Spawn1.createCreep([CARRY, CARRY, MOVE], newName, {
        role: 'courier',
        working: false,
        HAVE_LOAD: false
      }) == OK); {
      // Memory.lifeCount['harvester']++;
    }
  }
  else if (numberOfMiners < minimumNumberOfMiners) {
    // var newName = 'Mina' + Memory.lifeCount['harvester'];
    if (Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE], newName, {
        role: 'miner',
        working: false,
        HAVE_LOAD: false
      }) == OK); {
      // Memory.lifeCount['harvester']++;
    }
  }
  else if (numberOfWorkers < minimumNumberOfWorkers) {
    var newName = 'Worka' + Memory.lifeCount['harvester'];
    if (Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
      MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName, {
        role: 'worker',
        working: false,
        HAVE_LOAD: false
      }) == OK); {
      Memory.lifeCount['harvester']++;
    }
  }
  else if (numberOfBuilders < minimumNumberOfBuilders) {
    var newName = 'Builda' + Memory.lifeCount['builder'];
    if (Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], newName, {
        role: 'builder',
        working: false,
        HAVE_LOAD: false
      }) == OK); {
      Memory.lifeCount['builder']++;
    }
  }
  else if (numberOfRepairers < minimumNumberOfRepairers) {
    var newName = 'Repaira' + Memory.lifeCount['builder'];
    if (Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE, CARRY, MOVE], newName, {
        role: 'repairer',
        working: false,
        HAVE_LOAD: false
      }) == OK); {
      Memory.lifeCount['builder']++;
    }
  }


  else if (numberOfAttackers < minimumNumberOfAttackers) {
    var newName = 'Attacka' + Memory.lifeCount['upgrader'];
    if (Game.spawns.Spawn1.createCreep([MOVE, MOVE, MOVE, MOVE, MOVE, ,], newName, {
        role: 'attacker',
        HAVE_LOAD: false
      }) == OK); {
      Memory.lifeCount['upgrader']++;
    }
  }
  else if (numberOfHealers < minimumNumberOfHealers) {
    var newName = 'Heala' + Memory.lifeCount['upgrader'];
    if (Game.spawns.Spawn1.createCreep([TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL, HEAL, MOVE], newName, {
        role: 'healer',
        HAVE_LOAD: false
      }) == OK); {
      Memory.lifeCount['upgrader']++;
    }
  }

  else if (numberOfWestminer < minimumNumberOfWestminer) {
    var newName = 'Westminer' + Memory.lifeCount['harvester'];
    if (Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], newName, {
        role: 'westminer',
        working: false,
        HAVE_LOAD: false
      }) == OK); {
      Memory.lifeCount['harvester']++;
    }
  }
  else if (numberOfWestcur < minimumNumberOfWestcur) {
    var newName = 'Westcur' + Memory.lifeCount['harvester'];
    if (Game.spawns.Spawn1.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK,
    MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName, {
        role: 'westcur',
        working: false,
        HAVE_LOAD: false
      }) == OK); {
      Memory.lifeCount['harvester']++;
    }
  }
  else if (numberOfWestroam < minimumNumberOfWestroam) {
    var newName = 'Westroam' + Memory.lifeCount['harvester'];
    if (Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName, {
        role: 'westroam',
        HAVE_LOAD: false
      }) == OK); {
      Memory.lifeCount['harvester']++;
    }
  }

  else if (numberOfClaimers < minimumNumberOfClaimers) {
    var newName = 'Claima' + Memory.lifeCount['harvester'];
    if (Game.spawns.Spawn1.createCreep([CLAIM, CLAIM, MOVE, MOVE], newName, {
        role: 'claimer',
        HAVE_LOAD: false
      }) == OK); {
      Memory.lifeCount['harvester']++;
    }
  }


  else if (numberOfNorthwestminer < minimumNumberOfNorthwestminer) {
    var newName = 'Northwestminer' + Memory.lifeCount['harvester'];
    if (Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, CARRY, MOVE, MOVE], newName, {
        role: 'northwestminer',
        working: false,
        HAVE_LOAD: false
      }) == OK); {
      Memory.lifeCount['harvester']++;
    }
  }
  else if (numberOfNorthwestcur < minimumNumberOfNorthwestcur) {
    var newName = 'Northwestcur' + Memory.lifeCount['harvester'];
    if (Game.spawns.Spawn1.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName, {
        role: 'northwestcur',
        working: false,
        HAVE_LOAD: false
      }) == OK); {
      Memory.lifeCount['harvester']++;
    }
  }
  else if (numberOfNorthwestroam < minimumNumberOfNorthwestroam) {
    var newName = 'Northwestroam' + Memory.lifeCount['harvester'];
    if (Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY,
       MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE], newName, {
        role: 'northwestroam',
        working: false,
        HAVE_LOAD: false
      }) == OK); {
      Memory.lifeCount['harvester']++;
    }
  }



  // Cannot sustain with 1 spawner




  else if (numberOfNorth2roam < minimumNumberOfNorth2roam) {
    var newName = 'North2roam' + Memory.lifeCount['harvester'];
    if (Game.spawns.Spawn2.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], newName, {
        role: 'north2roam',
        working: false,
        HAVE_LOAD: false
      }) == OK); {
      Memory.lifeCount['harvester']++;
    }
  }












  // if (!(newName < 0)) {
  //  console.log(`Spawned new creep: ${newName}`);
  // }
};
