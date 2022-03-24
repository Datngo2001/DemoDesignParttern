// ################ FACTORY ################
interface AbstractFactory {
    spawnWeakEnemy(): AbstractWeakEnemy;

    spawnStrongEnemy(): AbstractStrongEnemy;
}

class Level1EnemyFactory implements AbstractFactory {
    public spawnWeakEnemy(): AbstractWeakEnemy {
        return new WeakEnemyLevel1();
    }

    public spawnStrongEnemy(): AbstractStrongEnemy {
        return new StrongEnemyLevel1();
    }
}

class Level2EnemyFactory implements AbstractFactory {
    public spawnWeakEnemy(): AbstractWeakEnemy {
        return new WeakEnemyLevel2();
    }

    public spawnStrongEnemy(): AbstractStrongEnemy {
        return new StrongEnemyLevel1();
    }
}

class Level3EnemyFactory implements AbstractFactory {
    public spawnWeakEnemy(): AbstractWeakEnemy {
        return new WeakEnemyLevel1();
    }

    public spawnStrongEnemy(): AbstractStrongEnemy {
        return new StrongEnemyLevel2();
    }
}

class Level4EnemyFactory implements AbstractFactory {
    public spawnWeakEnemy(): AbstractWeakEnemy {
        return new WeakEnemyLevel2();
    }

    public spawnStrongEnemy(): AbstractStrongEnemy {
        return new StrongEnemyLevel2();
    }
}

class Level5EnemyFactory implements AbstractFactory {
    public spawnWeakEnemy(): AbstractWeakEnemy {
        return new WeakEnemyLevel2();
    }

    public spawnStrongEnemy(): AbstractStrongEnemy {
        return new StrongEnemyLevel2();
    }
}
// ############### END REGION ###############


// ################ PRODUCT ################
interface AbstractWeakEnemy {
    usefulFunctionA(): string;
}

class WeakEnemyLevel1 implements AbstractWeakEnemy {
    public usefulFunctionA(): string {
        return 'The result of the product A1.';
    }
}

class WeakEnemyLevel2 implements AbstractWeakEnemy {
    public usefulFunctionA(): string {
        return 'The result of the product A2.';
    }
}

interface AbstractStrongEnemy {
    usefulFunctionB(): string;
}

class StrongEnemyLevel1 implements AbstractStrongEnemy {
    public usefulFunctionB(): string {
        return 'The result of the product B1.';
    }
}

class StrongEnemyLevel2 implements AbstractStrongEnemy {
    public usefulFunctionB(): string {
        return 'The result of the product B2.';
    }
}
// ############### END REGION ###############
