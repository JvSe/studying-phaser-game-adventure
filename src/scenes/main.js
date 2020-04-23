var mainScene = new Phaser.Scene('main');

mainScene.init = function() {
    this.heroVelocity = 2;
    this.direction = 'right';
    
};

mainScene.preload = function() {
    this.load.image('background', 'assets/SciFi/background.png');
    this.load.image('solo1', 'assets/SciFi/solo1.png');
    this.load.image('solo2', 'assets/SciFi/solo2-1.png');
    this.load.image('solo3', 'assets/SciFi/solo2-2.png');
    this.load.image('solo4', 'assets/SciFi/solo2-3.png');
    this.load.spritesheet('hero', 'assets/SciFi/hero.png', { frameWidth: 177, frameHeight: 173})
};

mainScene.create = function() {
    this.add.sprite(0,0, 'background').setOrigin(0,0);
    cursors = this.input.keyboard.createCursorKeys();

    plataforms = this.physics.add.staticGroup();
    plataforms.create(50,this.sys.game.config.height, 'solo1').setScale(0.5)
    

    hero = this.physics.add.sprite(50,500, 'hero');
    hero.setBounce(0.1);
    hero.setCollideWorldBounds(true);
    //hero.setScale(0.5);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('hero', { start: 51, end: 57 }),
        frameRate: 20,
        repeat: -1
    });

    this.anims.create({
        key: 'stop-right',
        frames: this.anims.generateFrameNumbers('hero', { start: 1, end: 9 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'stop-left',
        frames: this.anims.generateFrameNumbers('hero', { start: 30, end: 39 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('hero', { start: 21, end: 27 }),
        frameRate: 20,
        repeat: -1
    });
    
    this.physics.add.collider(hero, plataforms);
};

mainScene.update = function() {

    if (cursors.left.isDown) {
        hero.setVelocityX(-160);

        hero.anims.play('left', true);
        this.direction = 'left'
    }
    else if (cursors.right.isDown) {
        hero.setVelocityX(160);

        hero.anims.play('right', true);
        this.direction = 'right'

    } else {
        if(this.direction == 'right') {
            hero.setVelocityX(0);

            hero.anims.play('stop-right', true);
        } else {
            hero.setVelocityX(0);

            hero.anims.play('stop-left', true);
        }
        
    }
    

    //if (cursors.up.isDown && player.body.touching.down) {
        //hero.setVelocityY(-330);
    //}
};