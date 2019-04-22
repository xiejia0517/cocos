cc.Class({
    extends: cc.Component,

    properties: {
       scoreLabel:cc.Label,
       score:0,
       blockPrefab:cc.Prefab,
       gap:20,
    },

    start () {
        this.drawBgBlocks();
    },

    drawBgBlocks(){

    },
    // update (dt) {},
});
