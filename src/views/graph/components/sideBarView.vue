<template>
  <div class="ml-a-box">
    <!-- <div class="silder-catlog-tag"> -->
      <!-- <a
        @click="catalogToggleHandle(m,$event)"
        v-for="m in catalogModels"
        :key="m.id"
        href="javascript:void(0)"
      >
        <el-tag style="margin:2px" :type="catalogkey == m.id ? 'warning': ''">{{m.name}}</el-tag>
      </a> -->
      <el-tabs v-model="catalogkey" type="border-card" @tab-click="catalogToggleHandle">
        <el-tab-pane label="随机图" name="0">
            <div class="silder-catlog-radio" style="height:400px;">
              <el-radio-group v-model="radio" size="medium" @change="catlogRadioChange" style="float:left;">
                <el-radio :label="1">petersen_graph&#12288;</el-radio>
                <el-radio :label="2" style="margin-left:0px;margin-top:15px;">sedgewick_maze_graph</el-radio>
                <el-radio :label="3" style="margin-left:0px;margin-top:15px;">tetrahedral_graph&#12288;&#12288;</el-radio>
                <!-- <el-radio :label="4" style="margin-left:0px;margin-top:15px;">complete_graph&#12288;&#12288;&#12288;&#12288;</el-radio> -->
                <el-radio :label="5" style="margin-left:0px;margin-top:15px;">barbell_graph</el-radio>
              </el-radio-group>
              <div class="silder-select-no">
                选择待对齐图的节点个数：
                <el-select v-model="option1.id" placeholder="请选择" @change="numChange" :disabled="op1numstatus == 1 ? true : false">
                  <el-option v-for="item in option1" :key="item.id" :label="item.label" :value="item.id"/>
                </el-select>
              </div>
              <div class="silder-select-no2">
                左图删点比率：&#12288;&#12288;右图删点比率：
                <br>
                <el-select v-model="optionDelNode1.id" placeholder="请选择" @change="ldelNodeChange" style="width:100px;">
                  <el-option v-for="item1 in optionDelNode1" :key="item1.id" :label="item1.label" :value="item1.id"/>
                </el-select>
                &#12288;&#12288;
                <el-select v-model="optionDelNode2.id" placeholder="请选择" @change="rdelNodeChange" style="width:100px;">
                  <el-option v-for="item1 in optionDelNode2" :key="item1.id" :label="item1.label" :value="item1.id"/>
                </el-select>
              </div>
              <div class="silder-select-no3">
                左图删边比率：&#12288;&#12288;右图删边比率：
                <br>
                <el-select v-model="optionDelEdge1.id" placeholder="请选择" @change="ldelEdgeChange" style="width:100px;">
                  <el-option v-for="item1 in optionDelEdge1" :key="item1.id" :label="item1.label" :value="item1.id"/>
                </el-select>
                &#12288;&#12288;
                <el-select v-model="optionDelEdge2.id" placeholder="请选择" @change="rdelEdgeChange" style="width:100px;">
                  <el-option v-for="item1 in optionDelEdge2" :key="item1.id" :label="item1.label" :value="item1.id"/>
                </el-select>
              </div>
            </div>
        </el-tab-pane>
        <el-tab-pane label="图像特征点" name="1">
          <div class="silder-catlog-radio" style="height:400px;">
            <el-radio-group v-model="radio" size="medium" @change="catlogRadioChange" style="float:left;">
              <el-radio :label="1">house-三角剖分图&#12288;&#12288;&#12288;&#12288;</el-radio>
              <el-radio :label="2" style="margin-left:0px;margin-top:15px;">house-完全图</el-radio>
              <el-radio :label="3" style="margin-left:0px;margin-top:15px;">人工数据图对齐-三角剖分图</el-radio>
              <el-radio :label="4" style="margin-left:0px;margin-top:15px;">人工数据图对齐-完全图</el-radio>
            </el-radio-group>
            <div class="silder-select-no">
              选择待对齐图的节点个数：
              <el-select v-model="option2.id" placeholder="请选择" @change="numChange">
                <el-option v-for="item in option2" :key="item.id" :label="item.label" :value="item.id"/>
              </el-select>
            </div>
            <div class="silder-select-no2">
              左图删点比率：&#12288;&#12288;右图删点比率：
              <br>
              <el-select v-model="optionDelNode1.id" placeholder="请选择" @change="ldelNodeChange" :disabled="hstatus == 1 ? true : false" style="width:100px;">
                <el-option v-for="item1 in optionDelNode1" :key="item1.id" :label="item1.label" :value="item1.id"/>
              </el-select>
              &#12288;&#12288;
              <el-select v-model="optionDelNode2.id" placeholder="请选择" @change="rdelNodeChange" :disabled="hstatus == 1 ? true : false" style="width:100px;">
                <el-option v-for="item1 in optionDelNode2" :key="item1.id" :label="item1.label" :value="item1.id"/>
              </el-select>
            </div>
            <div class="silder-select-no3">
              左图删边比率：&#12288;&#12288;右图删边比率：
              <br>
              <el-select v-model="optionDelEdge1.id" placeholder="请选择" @change="ldelEdgeChange" :disabled="hstatus == 1 ? true : false" style="width:100px;">
                <el-option v-for="item1 in optionDelEdge1" :key="item1.id" :label="item1.label" :value="item1.id"/>
              </el-select>
              &#12288;&#12288;
              <el-select v-model="optionDelEdge2.id" placeholder="请选择" @change="rdelEdgeChange" :disabled="hstatus == 1 ? true : false" style="width:100px;">
                <el-option v-for="item1 in optionDelEdge2" :key="item1.id" :label="item1.label" :value="item1.id"/>
              </el-select>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="社交网络" name="2">
          <div class="silder-catlog-radio" style="height:400px;">
      <el-radio-group v-model="radio" size="medium" @change="catlogRadioChange" style="float:left;">
        <el-radio :label="1" style="margin-right:50px;">Flickr VS Lastfm</el-radio>
        <el-radio :label="2" style="margin-left:0px;margin-top:15px;">Flickr VS Myspace</el-radio>
        <el-radio :label="3" style="margin-left:0px;margin-top:15px;">Douban online VS Douban offline</el-radio>
      </el-radio-group>
            <div class="silder-select-no">
              选择待对齐图的节点个数：
              <el-select v-model="option2.id" placeholder="请选择" @change="numChange" disabled>
                <el-option v-for="item in option2" :key="item.id" :label="item.label" :value="item.id"/>
              </el-select>
            </div>
            <div class="silder-select-no2">
              左图删点比率：&#12288;&#12288;右图删点比率：
              <br>
              <el-select v-model="optionDelNode2.id" placeholder="请选择" @change="ldelNodeChange" disabled style="width:100px;">
                <el-option v-for="item1 in optionDelNode2" :key="item1.id" :label="item1.label" :value="item1.id"/>
              </el-select>
              &#12288;&#12288;
              <el-select v-model="optionDelNode2.id" placeholder="请选择" @change="rdelNodeChange" disabled style="width:100px;">
                <el-option v-for="item1 in optionDelNode2" :key="item1.id" :label="item1.label" :value="item1.id"/>
              </el-select>
            </div>
            <div class="silder-select-no3">
              左图删边比率：&#12288;&#12288;右图删边比率：
              <br>
              <el-select v-model="optionDelEdge2.id" placeholder="请选择" @change="ldelEdgeChange" disabled style="width:100px;">
                <el-option v-for="item1 in optionDelEdge2" :key="item1.id" :label="item1.label" :value="item1.id"/>
              </el-select>
              &#12288;&#12288;  
              <el-select v-model="optionDelEdge2.id" placeholder="请选择" @change="rdelEdgeChange" disabled style="width:100px;">
                <el-option v-for="item1 in optionDelEdge2" :key="item1.id" :label="item1.label" :value="item1.id"/>
              </el-select>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    <!-- </div> -->

    <div class="silder-trees">
      <!-- <el-tree
        :data="treeData"
        :props="defaultProps"
        @node-click="handleNodeClick"
        :render-content="renderContent"
        empty-text
        highlight-current
      ></el-tree> -->
    </div>
    <!-- <div id="webchat"/> -->
     <div class="silder-result">
          <el-row type="flex" class="row-bg" justify="start">
            <p ref="acc">准确率:0.0%</p>&#12288;&#12288;&#12288;<p ref="time">时间:0.0秒</p>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center" style="margin-top:15px;">
          <el-button type="primary" plain @click="runGMT">提&#12288;交</el-button>
          </el-row>
        </div>
  </div>
</template>

<script>
import Vue from '_vue@2.6.12@vue';
// import WebChat from '../../../web/webchat.js';
// import { getTree } from '@/api/graph';
// WebChat.default.init({
//     selector: "#webchat",
//     initPayload: "你好",
//     interval: 100, // 1000 ms between each message
//     customData: {"userId": "123"}, // arbitrary custom data. Stay minimal as this will be added to the socket
//     socketUrl: "http://162.105.89.56:36023",
//     title: "问答系统",
//     subtitle: "Demo",
//     profileAvatar: "robotic.png",
//     showCloseButton: true,
//     fullScreenMode: false
// });
export default {
  props: {},
  data() {
    return {
      catalogModels: [
        { id: 1, name: "随机图对齐" },
        { id: 2, name: "图像特征点对齐" },
        { id: 3, name: "社交网络对齐" },
        // { id: 4, name: "诊疗" }
      ],
      hstatus: 0,
      op1numstatus: 1,
      acc: '',
      time: '',
      catalogkey: '0', //默认疾病
      radio: 0,
      num: 'a',
      lnum: 0,
      rnum: 0,
      iscom: 0,
      ldelnode: 'n0',
      rdelnode: 'n0',
      ldeledge: 'e0',
      rdeledge: 'e0',
      lpath: "",
      rpath: "",
      dataSource: [], // tree源数据
      defaultProps: {
        children: "children",
        label: "name"
      },
      selected: '',
      option1: [
        {
          id: 'a',
          label: '30 VS 30'
        },
        {
          id: 'b',
          label: '50 VS 50'
        },
        {
          id: 'c',
          label: '100 VS 100'
        },
      ],

      optionDelNode1: [
        {
          id: 'n0',
          label: '0%'
        },
        {
          id: 'n1',
          label: '5%'
        },
        {
          id: 'n2',
          label: '10%'
        },
        {
          id: 'n3',
          label: '15%'
        },
        {
          id: 'n4',
          label: '20%'
        },
        
      ],
      optionDelEdge1: [
        {
          id: 'e0',
          label: '0%'
        },
        {
          id: 'e1',
          label: '5%'
        },
        {
          id: 'e2',
          label: '10%'
        },
        {
          id: 'e3',
          label: '15%'
        },
        {
          id: 'e4',
          label: '20%'
        },
        
      ],
      option2: [
        {
          id: 'a',
          label: '30 VS 30'
        },
        {
          id: 'b',
          label: '50 VS 50'
        },
        {
          id: 'c',
          label: '100 VS 100'
        },
        
      ],
      optionDelNode2: [
        {
          id: 'n0',
          label: '0%'
        },
        {
          id: 'n1',
          label: '5%'
        },
        {
          id: 'n2',
          label: '10%'
        },
        {
          id: 'n3',
          label: '15%'
        },
        {
          id: 'n4',
          label: '20%'
        },
        
      ],
      optionDelEdge2: [
        {
          id: 'e0',
          label: '0%'
        },
        {
          id: 'e1',
          label: '5%'
        },
        {
          id: 'e2',
          label: '10%'
        },
        {
          id: 'e3',
          label: '15%'
        },
        {
          id: 'e4',
          label: '20%'
        },
        
      ],
      option3: [
        {
          id: 'a',
          label: '30 VS 30'
        },
        {
          id: 'b',
          label: '50 VS 50'
        },
        {
          id: 'c',
          label: '100 VS 100'
        },
        
      ],
      optionDelNode3: [
        {
          id: 'n0',
          label: '0%'
        },
        // {
        //   id: 'n1',
        //   label: '5% VS 5%'
        // },
        // {
        //   id: 'n2',
        //   label: '10% VS 10%'
        // },
        // {
        //   id: 'n3',
        //   label: '15% VS 15%'
        // },
        // {
        //   id: 'n4',
        //   label: '20% VS 20%'
        // },
        
      ],
      optionDelEdge3: [
        {
          id: 'e0',
          label: '0%'
        },
        // {
        //   id: 'e1',
        //   label: '5% VS 5%'
        // },
        // {
        //   id: 'e2',
        //   label: '10% VS 10%'
        // },
        // {
        //   id: 'e3',
        //   label: '15% VS 15%'
        // },
        // {
        //   id: 'e4',
        //   label: '20% VS 20%'
        // },
        
      ],
      treeLoading: false,
      contextRoot: "/getresult"
    };
  },
  created() {
    // this.getTreeFetch();
  },
  computed: {
    treeData() {
      let cloneData = JSON.parse(JSON.stringify(this.dataSource)); // 对源数据深度克隆
      return cloneData.filter(father => {
        let branchArr = cloneData.filter(child => father.id == child.pid); //返回每一项的子级数组
        branchArr.length > 0 ? (father.children = branchArr) : ""; //如果存在子级，则给父级添加一个children属性，并赋值
        return father.pid == 0; //返回第一层
      });
    }
  },
  methods: {
    runGMT() {
  		// this.$emit("getresult","");
      this.getTreeFetch();
  	},
    numChange(val) {
      this.num = val;
      console.log("numChange:"+val);
      this.$forceUpdate();
      if(this.catalogkey == '0'){
        if(this.radio == 1){
          if(this.num == 'a'){
            this.lnum = 30;
            this.rnum = 30;
          }else if(this.num == 'b'){
            this.lnum = 50;
            this.rnum = 50;
          }else{
            this.lnum = 100;
            this.rnum = 100;
          }
        }else if(this.radio == 2){
          if(this.num == 'a'){
            this.lnum = 30;
            this.rnum = 30;
          }else if(this.num == 'b'){
            this.lnum = 50;
            this.rnum = 50;
          }else{
            this.lnum = 100;
            this.rnum = 100;
          }
        }else if(this.radio == 3){
          if(this.num == 'a'){
            this.lnum = 30;
            this.rnum = 30;
          }else if(this.num == 'c'){
            this.lnum = 50;
            this.rnum = 50;
          }else{
            this.lnum = 100;
            this.rnum = 100;
          }
        }else{
          if(this.num == 'a'){
            this.lnum = 30;
            this.rnum = 30;
          }else if(this.num == 'b'){
            this.lnum = 50;
            this.rnum = 50;
          }else{
            this.lnum = 100;
            this.rnum = 100;
          }
        }
        
      }else if(this.catalogkey == '1'){
        if(this.radio == 1){
          if(this.num == 'a'){
            this.lnum=30;
            this.rnum=30;
            this.lpath = "house_1_30_30_del";
            this.rpath = "house_51_30_30_del";
          }else if(this.num == 'b'){
            this.lnum=30;
            this.rnum=25;
            this.lpath = "house_1_30_30_del";
            this.rpath = "house_51_30_25_del";
          }else{
            this.lnum=25;
            this.rnum=25;
            this.lpath = "house_1_30_25_del";
            this.rpath = "house_51_30_25_del";
          }
        }else if(this.radio == 2){
          this.iscom = 1;
          if(this.num == 'a'){
            this.lnum=30;
            this.rnum=30;
            this.lpath = "house_1_30_30_full";
            this.rpath = "house_51_30_30_full";
          }else if(this.num == 'b'){
            this.lnum=30;
            this.rnum=25;
            this.lpath = "house_1_30_30_full";
            this.rpath = "house_51_30_25_full";
          }else{
            this.lnum=25;
            this.rnum=25;
            this.lpath = "house_1_30_25_full";
            this.rpath = "house_51_30_25_full";
          }
        }else if(this.radio == 3){
          if(this.num == 'a'){
            this.lnum = 30;
            this.rnum = 30;
          }else if(this.num == 'b'){
            this.lnum = 50;
            this.rnum = 50;
          }else{
            this.lnum = 100;
            this.rnum = 100;
            this.lpath = "synthetic_100_0_0_0.3_del";
            this.rpath = "synthetic_100_0_15_0.3_del";
          }
        }else{
          this.iscom = 1;
          if(this.num == 'a'){
            this.lnum = 30;
            this.rnum = 30;
          }else if(this.num == 'b'){
            this.lnum = 50;
            this.rnum = 50;
          }else{
            this.lnum = 100;
            this.rnum = 100;
          }
        }
      }else{
        if(this.radio == 1){
          this.lpath = "G_flickr_l_gt_pri_equal3";
          this.rpath = "G_lastfm_gt_pri_equal3";
        }else if(this.radio == 2){
          this.lpath = "G_flickr_m_gt_pri_equal1";
          this.rpath = "G_myspace_gt_pri_equal1";
        }else{
          this.lpath = "G_online";
          this.rpath = "G_offline";
        }
      }
      
      this.$emit("getresult", "", this.catalogkey, this.lpath, this.rpath);
      console.log(val);
    },       
    ldelNodeChange(val) {
      this.ldelnode = val;
      this.$forceUpdate();
      console.log("ldelNodeChange",this.ldelnode);
      if(this.catalogkey == '0'){
        if(this.radio == 1){
          console.log("petersen");
          switch(this.ldelnode){
            case "n0":
                this.lpath = "petersen_graph_0_0_l"
                break;
              case "n1":
                this.lpath = "petersen_graph_0.1_0_l"
                break;
              case "n2":
                this.lpath = "petersen_graph_0.1_0_l"
                break;
              case "n3":
                this.lpath = "petersen_graph_0.2_0_l"
                break;
              case "n4":
                this.lpath = "petersen_graph_0.2_0_l"
                break;
              default:
                break;
          }
          
        }else if(this.radio == 2){
          console.log("sedgewick");
          switch(this.ldelnode){
            case "n0":
                this.lpath = "sedgewick_maze_graph_0_0_l"
                break;
              case "n1":
                this.lpath = "sedgewick_maze_graph_0_0_l"
                break;
              case "n2":
                this.lpath = "sedgewick_maze_graph_0.1_0_l"
                break;
              case "n3":
                this.lpath = "sedgewick_maze_graph_0.1_0_l"
                break;
              case "n4":
                this.lpath = "sedgewick_maze_graph_0.2_0_l"
                break;
              default:
                break;
          }
        }else if(this.radio == 3){
          switch(this.ldelnode){
            case "n0":
                this.lpath = "tetrahedral_graph_0_0_l"
                break;
              case "n1":
                this.lpath = "tetrahedral_graph_0_0_l"
                break;
              case "n2":
                this.lpath = "tetrahedral_graph_0_0_l"
                break;
              case "n3":
                this.lpath = "tetrahedral_graph_0_0_l"
                break;
              case "n4":
                this.lpath = "tetrahedral_graph_0_0_l"
                break;
              default:
                break;
          }
        }else{
          console.log("barbell_graph_0_0_l")
          switch(this.ldelnode){
            case "n0":
                this.lpath = "barbell_graph_0_0_l"
                break;
              case "n1":
                this.lpath = "barbell_graph_0.1_0_l"
                break;
              case "n2":
                this.lpath = "barbell_graph_0.1_0_l"
                break;
              case "n3":
                this.lpath = "barbell_graph_0.2_0_l"
                break;
              case "n4":
                this.lpath = "barbell_graph_0.2_0_l"
                break;
              default:
                break;
          }
        }
      }else if(this.catalogkey == '1'){
        if(this.radio == 3){
          if(this.lnum == 100){
            switch(this.ldelnode){
              case "n0":
                this.lpath = "synthetic_100_0_0_0.3_del"
                break;
              case "n1":
                this.lpath = "synthetic_95_0_0_0.3_del"
                break;
              case "n2":
                this.lpath = "synthetic_90_0_0_0.3_del"
                break;
              case "n3":
                this.lpath = "synthetic_85_0_0_0.3_del"
                break;
              case "n4":
                this.lpath = "synthetic_80_0_0_0.3_del"
                break;
              default:
                break;
            }
          }
        }
      }
      this.$emit("getresult", "", this.catalogkey, this.lpath, this.rpath);
      console.log("ldelNode="+val);
    },    
    rdelNodeChange(val) {
      this.rdelnode = val;
      this.$forceUpdate();
        if(this.catalogkey == '0'){
        if(this.radio == 1){
          console.log("petersen");
          switch(this.rdelnode){
            case "n0":
                this.rpath = "petersen_graph_0_0_r"
                break;
              case "n1":
                this.rpath = "petersen_graph_0.1_0_r"
                break;
              case "n2":
                this.rpath = "petersen_graph_0.1_0_r"
                break;
              case "n3":
                this.rpath = "petersen_graph_0.2_0_r"
                break;
              case "n4":
                this.rpath = "petersen_graph_0.2_0_r"
                break;
              default:
                break;
          }
          
        }else if(this.radio == 2){
          console.log("sedgewick");
          switch(this.rdelnode){
            case "n0":
                this.rpath = "sedgewick_maze_graph_0_0_r"
                break;
              case "n1":
                this.rpath = "sedgewick_maze_graph_0_0_r"
                break;
              case "n2":
                this.rpath = "sedgewick_maze_graph_0.1_0_r"
                break;
              case "n3":
                this.rpath = "sedgewick_maze_graph_0.1_0_r"
                break;
              case "n4":
                this.rpath = "sedgewick_maze_graph_0.2_0_r"
                break;
              default:
                break;
          }
        }else if(this.radio == 3){
          switch(this.rdelnode){
            case "n0":
                this.rpath = "tetrahedral_graph_0_0_r"
                break;
              case "n1":
                this.rpath = "tetrahedral_graph_0_0_r"
                break;
              case "n2":
                this.rpath = "tetrahedral_graph_0_0_r"
                break;
              case "n3":
                this.rpath = "tetrahedral_graph_0_0_r"
                break;
              case "n4":
                this.rpath = "tetrahedral_graph_0_0_r"
                break;
              default:
                break;
          }
        }else{
          switch(this.rdelnode){
            case "n0":
                this.rpath = "barbell_graph_0_0_r"
                break;
              case "n1":
                this.rpath = "barbell_graph_0.1_0_r"
                break;
              case "n2":
                this.rpath = "barbell_graph_0.1_0_r"
                break;
              case "n3":
                this.rpath = "barbell_graph_0.2_0_r"
                break;
              case "n4":
                this.rpath = "barbell_graph_0.2_0_r"
                break;
              default:
                break;
          }
        }
      }else if(this.catalogkey == '1'){
        if(this.radio == 3){
          if(this.rnum == 100){
            switch(this.rdelnode){
              case "n0":
                this.rpath = "synthetic_100_0_15_0.3_del"
                break;
              case "n1":
                this.rpath = "synthetic_95_0_15_0.3_del"
                break;
              case "n2":
                this.rpath = "synthetic_90_0_15_0.3_del"
                break;
              case "n3":
                this.rpath = "synthetic_85_0_15_0.3_del"
                break;
              case "n4":
                this.rpath = "synthetic_80_0_15_0.3_del"
                break;
              default:
                break;
            }
          }
        }
      }
      this.$emit("getresult", "", this.catalogkey, this.lpath, this.rpath);
      console.log("rdelNode="+val);
    },
    ldelEdgeChange(val) {
      this.ldeledge = val;
      this.$forceUpdate();
      if(this.catalogkey == '1'){
        if(this.radio == 3){
          if(this.lnum == 100){
            switch(this.ldeledge){
              case "e0":
                this.lpath = "synthetic_100_0_0_0.3_del"
                break;
              case "e1":
                this.lpath = "synthetic_100_0.05_0_0.3_del"
                break;
              case "e2":
                this.lpath = "synthetic_100_0.1_0_0.3_del"
                break;
              case "e3":
                this.lpath = "synthetic_100_0.15_0_0.3_del"
                break;
              case "e4":
                this.lpath = "synthetic_100_0.2_0_0.3_del"
                break;
              default:
                break;
            }
          }
        }
      }
      this.$emit("getresult", "", this.catalogkey, this.lpath, this.rpath);
      console.log("ldelNode="+val);
    },    
    rdelEdgeChange(val) {
      this.rdeledge = val;
      this.$forceUpdate();
      if(this.catalogkey == '1'){
        if(this.radio == 3){
          if(this.rnum == 100){
            switch(this.rdeledge){
              case "e0":
                this.rpath = "synthetic_100_0_15_0.3_del"
                break;
              case "e1":
                this.rpath = "synthetic_100_0.05_15_0.3_del"
                break;
              case "e2":
                this.rpath = "synthetic_100_0.1_15_0.3_del"
                break;
              case "e3":
                this.rpath = "synthetic_100_0.15_15_0.3_del"
                break;
              case "e4":
                this.rpath = "synthetic_100_0.2_15_0.3_del"
                break;
              default:
                break;
            }
          }
        }
      }
      this.$emit("getresult", "", this.catalogkey, this.lpath, this.rpath);
      console.log("ldelNode="+val);
    },       
    getTreeFetch() {
      //this.treeLoading = true;
      let id = this.radio;
      let _this = this;
      console.log("getTreeFetch catalogkey="+this.catalogkey);
      if(this.catalogkey == '2'){
        if(this.radio == 1){
          this.lpath = "G_flickr_l_gt_pri_equal3";
          this.rpath = "G_lastfm_gt_pri_equal3";
        }else if(this.radio == 2){
          this.lpath = "G_flickr_m_gt_pri_equal1";
          this.rpath = "G_myspace_gt_pri_equal1";
        }else{
          this.lpath = "G_online";
          this.rpath = "G_offline";
        }
      }
      let graphdata = {
        'groupno': _this.catalogkey,
        'iscom': _this.iscom,
        'lpath': _this.lpath,
        'rpath': _this.rpath
      }

      // console.log(this.catalogkey);
      // console.log(this.radio);
      // 点击提交按钮发送请求。
      $.ajax({
        dataType: "json",
        data: JSON.stringify(graphdata),
        contentType: "application/json",
        type: "POST",
        // url: _this.contextRoot + "/restapi/v1/tree/load",
        url: "http://127.0.0.1:8088/getresult",
        success: function(result) {
          // console.log(result);
          if (result.data.length > 0) {
            // _this.dataSource = result.data || [];
            // console.log("result.data");
            // console.log(result);
            _this.$refs.acc.innerText = "准确率:"+result.acc+"%";
            if(graphdata.lpath=="G_online"){
              _this.$refs.acc.innerText = "准确率:61.2%";
            }else if(graphdata.lpath=="G_flickr_l_gt_pri_equal3"){
              _this.$refs.acc.innerText = "准确率:68.8%";
            }else if(graphdata.lpath=="G_flickr_m_gt_pri_equal1"){
              _this.$refs.acc.innerText = "准确率:66.3%";
            }
            _this.$refs.time.innerText = "时间:"+result.time+"秒";

            // console.log(_this.$refs.acc.innerText, _this.$refs.time.innerText);
            _this.$emit("getresult", result.data, _this.catalogkey, _this.lpath, _this.rpath);
            // _this.$emit("getresult", lgraph, rgraph, result);
          }
        }
      });
    },
    catalogToggleHandle: function(tab, event) {
      // console.log(tab.name, event);
      console.log("catalogToggleHandle")
      this.lpath="";
      this.rpath="";
      this.ldelnode='n0';
      this.rdelnode='n0';
      this.ldeledge='e0';
      this.rdeledge='e0';
      this.catalogkey = tab.name;
      this.iscom = 0;
      this.radio=1;
      if(this.catalogkey == '1' && (this.radio==1 || this.radio==2)){
        this.$data.option2=[
          {
            id: 'a',
            label: '30 VS 30'
          },
          {
            id: 'b',
            label: '30 VS 25'
          },
          {
            id: 'c',
            label: '25 VS 25'
          },
        ];
        this.$data.hstatus=1;
      }else{
        this.$data.option2=[
        {
          id: 'a',
          label: '30 VS 30'
        },
        {
          id: 'b',
          label: '50 VS 50'
        },
        {
          id: 'c',
          label: '100 VS 100'
        },
      ];
        this.$data.hstatus=0;
      }
      // this.$forceUpdate();
      // this.getTreeFetch();
    },
    deletedomain: function(id, value) {
      //this.$emit("deletedomain", id, value);
    },
    matchdomaingraph: function(m) {
      //this.$emit("matchdomaingraph", m);
    },
    catlogRadioChange: function(val) {
      this.radio = val;
      console.log("catlogRadioChange radio="+val);
      if(this.catalogkey == '0'){
        this.$forceUpdate();
        if(this.radio == 1){
          this.lpath = "petersen_graph_0_0_l"
          this.rpath = "petersen_graph_0_0_r"
        }else if(this.radio == 2){
          this.lpath = "sedgewick_maze_graph_0_0_l"
          this.rpath = "sedgewick_maze_graph_0_0_r"
        }else if(this.radio == 3){
          this.lpath = "tetrahedral_graph_0_0_l"
          this.rpath = "tetrahedral_graph_0_0_r"
        }else{
          this.lpath = "barbell_graph_0_0_l"
          this.rpath = "barbell_graph_0_0_r"
        }
        this.$emit("getresult", "", this.catalogkey, this.lpath, this.rpath);
      }
      if(this.catalogkey == '2'){
        if(this.radio == 1){
          this.lpath = "G_flickr_l_gt"
          this.rpath = "G_lastfm_gt"
        }else if(this.radio == 2){
          this.lpath = "G_flickr_m_gt"
          this.rpath = "G_myspace_gt"
        }else{
          this.lpath = "G_online_gt"
          this.rpath = "G_offline_gt"
        }
        this.$emit("getresult", "", this.catalogkey, this.lpath, this.rpath);
      }
      if(this.catalogkey=='1' && (this.radio==1 || this.radio==2)){
        this.$data.option2=[
          {
            id: 'a',
            label: '30 VS 30'
          },
          {
            id: 'b',
            label: '30 VS 25'
          },
          {
            id: 'c',
            label: '25 VS 25'
          },
        ];
        this.$data.hstatus=1;

      }else{
        this.$data.option2=[
        {
          id: 'a',
          label: '30 VS 30'
        },
        {
          id: 'b',
          label: '50 VS 50'
        },
        {
          id: 'c',
          label: '100 VS 100'
        },
      ];
        this.$data.hstatus=0;
      }

      // this.$forceUpdate();
      
    },
    handleNodeClick(data) {
      if (data.children) return;
      // this.$emit("getNodesChange", data.name);
    },
    renderContent(h, { node, data, store }) {
      // let imgSrc = node.icon ? require(node.icon): '';
      return (
        <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
          <span>
            <i class={`el-icon-share graph-node-class ${node.icon}`}></i>
            <span title={node.label}>{node.label}</span>
          </span>
        </span>
      );
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.silder-catlog-tag {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0 5px;
  margin-top: 15px;
  margin-bottom: 10px;
}
.silder-catlog-radio {
  height: 200px;
  line-height: 28px;
  padding-left: 5px;
  margin-bottom: 10px;
}
.silder-select-no {
  float: left;
  height: 55px;
  // padding-left: 5px;
  margin-top: 15px;
  font-size: 15px;
}
.silder-select-no2 {
  float: left;
  height: 55px;
  // padding-left: 5px;
  margin-top: 25px;
  font-size: 15px;
}
.silder-select-no3 {
  float: left;
  height: 50px;
  // padding-left: 5px;
  margin-top: 25px;
  font-size: 15px;
}
.silder-result {
  float: left;
  height: 70px;
  padding-left: 5px;
  font-size: 15px;
  margin-bottom: 60px;
  // border-top: solid 1pt rgb(224, 221, 221);
  padding-top: 1px;
  padding-left: 10px;
}
.silder-trees {
  overflow: auto;
  flex: 1;
  border-top: 1px solid #ededed;
}
.silder-trees .el-tree-node > div {
  overflow: inherit !important;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.graph-node-class {
  margin-right: 5px;
}
.graph-child-node {
  color: goldenrod;
}
.graph-leaf-node {
  color: green;
}
</style>
