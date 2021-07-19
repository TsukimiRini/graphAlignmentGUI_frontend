<template>
  <div class="ml-a-box">
    <div class="silder-catlog-tag">
      <!-- <a
        @click="catalogToggleHandle(m,$event)"
        v-for="m in catalogModels"
        :key="m.id"
        href="javascript:void(0)"
      >
        <el-tag style="margin:2px" :type="catalogkey == m.id ? 'warning': ''">{{m.name}}</el-tag>
      </a> -->
      <el-tabs type="border-card">
        <a @click="catalogToggleHandle(m,$event)"
        v-for="m in catalogModels"
        :key="m.id"
        href="javascript:void(0)">
        <el-tab-pane @click="catalogToggleHandle(m,$event)"
        v-for="m in catalogModels"
        :key="m.id" :label=m.name></el-tab-pane>
        </a>
      </el-tabs>
    </div>
    <div v-show="catalogkey == 1" class="silder-catlog-radio" style="height:145px;">
      <el-radio-group v-model="radio" size="medium" @change="catlogRadioChange" style="float:left;">
        <el-radio :label="1">petersen_graph&#12288;</el-radio>
        <el-radio :label="2" style="margin-left:0px;margin-top:15px;">sedgewick_maze_graph</el-radio>
        <el-radio :label="3" style="margin-left:0px;margin-top:15px;">tetrahedral_graph&#12288;&#12288;</el-radio>
        <el-radio :label="4" style="margin-left:0px;margin-top:15px;">complete_graph&#12288;&#12288;&#12288;&#12288;</el-radio>
        <el-radio :label="5" style="margin-left:0px;margin-top:15px;">barbell_graph</el-radio>
      </el-radio-group>
      <div class="silder-select-no">
        选择待对齐图的节点个数：
        <el-select v-model="option1.id" placeholder="请选择" @change="numChange">
          <el-option v-for="item in option1" :key="item.id" :label="item.label" :value="item.id"/>
        </el-select>
      </div>
      <div class="silder-select-no2">
        删点比率：
        <br>
        <el-select v-model="optionDelNode.id" placeholder="请选择" @change="delNodeChange">
          <el-option v-for="item1 in optionDelNode" :key="item1.id" :label="item1.label" :value="item1.id"/>
        </el-select>
      </div>
      <div class="silder-select-no3">
        删边比率：
        <br>
        <el-select v-model="optionDelEdge.id" placeholder="请选择" @change="delNodeChange">
          <el-option v-for="item1 in optionDelEdge" :key="item1.id" :label="item1.label" :value="item1.id"/>
        </el-select>
      </div>
    </div>
    <div v-show="catalogkey == 2" class="silder-catlog-radio" style="height:120px;">
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
      <div class="silder-select-no">
        删点比率：
        <br>
        <el-select v-model="optionDelNode2.id" placeholder="请选择" @change="delNodeChange" :disabled="hstatus == 1 ? true : false">
          <el-option v-for="item1 in optionDelNode" :key="item1.id" :label="item1.label" :value="item1.id"/>
        </el-select>
      </div>
      <div class="silder-select-no3">
        删边比率：
        <br>
        <el-select v-model="optionDelEdge2.id" placeholder="请选择" @change="delNodeChange" :disabled="hstatus == 1 ? true : false">
          <el-option v-for="item1 in optionDelEdge" :key="item1.id" :label="item1.label" :value="item1.id"/>
        </el-select>
      </div>
    </div>
    <div v-show="catalogkey == 3" class="silder-catlog-radio" style="height:80px;">
      <el-radio-group v-model="radio" size="medium" @change="catlogRadioChange" style="float:left;">
        <el-radio :label="1" style="margin-right:50px;">Flickr VS Lastfm</el-radio>
        <el-radio :label="2" style="margin-left:0px;margin-top:15px;">Flickr VS Myspace</el-radio>
        <el-radio :label="3" style="margin-left:0px;margin-top:15px;">Douban online VS Douban offline</el-radio>
      </el-radio-group>
      <div class="silder-select-no">
        选择待对齐图的节点个数：
        <el-select v-model="option3.id" placeholder="请选择" @change="numChange" disabled>
          <el-option v-for="item in option2" :key="item.id" :label="item.label" :value="item.id"/>
        </el-select>
      </div>
      <div class="silder-select-no2">
        删点比率：
        <br>
        <el-select v-model="optionDelNode3.id" placeholder="请选择" @change="delNodeChange" disabled>
          <el-option v-for="item1 in optionDelNode" :key="item1.id" :label="item1.label" :value="item1.id"/>
        </el-select>
      </div>
      <div class="silder-select-no3">
        删边比率：
        <br>
        <el-select v-model="optionDelEdge3.id" placeholder="请选择" @change="delNodeChange" disabled>
          <el-option v-for="item1 in optionDelEdge" :key="item1.id" :label="item1.label" :value="item1.id"/>
        </el-select>
      </div>
    </div>
    
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
     <div class="silder-result">
          <el-row type="flex" class="row-bg" justify="start">
            <p ref="acc">准确率:0.0</p>&#12288;&#12288;&#12288;<p ref="time">时间:0.0秒</p>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center" style="margin-top:15px;">
          <el-button type="primary" plain @click="runGMT">提&#12288;交</el-button>
          </el-row>
        </div>
  </div>
</template>

<script>
import Vue from '_vue@2.6.12@vue';
// import { getTree } from '@/api/graph';
export default {
  props: {},
  data() {
    return {
      catalogModels: [
        { id: 1, name: "随机图对齐" },
        { id: 2, name: "图像关键点对齐" },
        { id: 3, name: "社交网络对齐" },
        // { id: 4, name: "诊疗" }
      ],
      hstatus: 0,
      acc: '',
      time: '',
      catalogkey: 1, //默认疾病
      radio: 0,
      selectNo: 'a',
      dataSource: [], // tree源数据
      defaultProps: {
        children: "children",
        label: "name"
      },
      selected: '',
      option1: [
        {
          id: 'a',
          label: '10 VS 10'
        },
        {
          id: 'b',
          label: '30 VS 30'
        },
        {
          id: 'c',
          label: '50 VS 50'
        },
        {
          id: 'd',
          label: '100 VS 100'
        },
      ],

      optionDelNode: [
        {
          id: 'n0',
          label: '0% VS 0%'
        },
        {
          id: 'n1',
          label: '5% VS 5%'
        },
        {
          id: 'n2',
          label: '10% VS 10%'
        },
        {
          id: 'n3',
          label: '15% VS 15%'
        },
        {
          id: 'n4',
          label: '20% VS 20%'
        },
        
      ],
      optionDelEdge: [
        {
          id: 'e0',
          label: '0% VS 0%'
        },
        {
          id: 'e1',
          label: '5% VS 5%'
        },
        {
          id: 'e2',
          label: '10% VS 10%'
        },
        {
          id: 'e3',
          label: '15% VS 15%'
        },
        {
          id: 'e4',
          label: '20% VS 20%'
        },
        
      ],
      option2: [
        {
          id: 'a',
          label: '10 VS 10'
        },
        {
          id: 'b',
          label: '30 VS 30'
        },
        {
          id: 'c',
          label: '50 VS 50'
        },
        {
          id: 'd',
          label: '100 VS 100'
        },
        
      ],
      optionDelNode2: [
        {
          id: 'n0',
          label: '0% VS 0%'
        },
        {
          id: 'n1',
          label: '5% VS 5%'
        },
        {
          id: 'n2',
          label: '10% VS 10%'
        },
        {
          id: 'n3',
          label: '15% VS 15%'
        },
        {
          id: 'n4',
          label: '20% VS 20%'
        },
        
      ],
      optionDelEdge2: [
        {
          id: 'e0',
          label: '0% VS 0%'
        },
        {
          id: 'e1',
          label: '5% VS 5%'
        },
        {
          id: 'e2',
          label: '10% VS 10%'
        },
        {
          id: 'e3',
          label: '15% VS 15%'
        },
        {
          id: 'e4',
          label: '20% VS 20%'
        },
        
      ],
      option3: [
        {
          id: 'a',
          label: '10 VS 10'
        },
        {
          id: 'b',
          label: '30 VS 30'
        },
        {
          id: 'c',
          label: '50 VS 50'
        },
        {
          id: 'd',
          label: '100 VS 100'
        },
        
      ],
      optionDelNode3: [
        {
          id: 'n0',
          label: '0% VS 0%'
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
          label: '0% VS 0%'
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
        this.$forceUpdate();
        // this.$emit("", "", "");
        // console.log(val);
    },       
    delNodeChange(val) {
        this.$forceUpdate();
        // console.log(val);
    },       
    getTreeFetch() {
      //this.treeLoading = true;
      let id = this.radio;
      let _this = this;
      let data = {
        mid: id
      }

      // console.log(this.catalogkey);
      // console.log(this.radio);
      // 点击提交按钮发送请求。
      $.ajax({
        dataType: "json",
        data: JSON.stringify(data),
        contentType: "application/json;",
        type: "POST",
        // url: _this.contextRoot + "/restapi/v1/tree/load",
        url: "http://127.0.0.1:8088/getresult",
        success: function(result) {
          // console.log(result);
          if (result.data.length > 0) {
            // _this.dataSource = result.data || [];
            // console.log("result.data");
            // console.log(result);
            _this.$refs.acc.innerText = "准确率:"+result.acc;
            _this.$refs.time.innerText = "时间:"+result.time;
            // console.log(_this.$refs.acc.innerText, _this.$refs.time.innerText);
            _this.$emit("getresult", result.data, "", "");
            // _this.$emit("getresult", lgraph, rgraph, result);
          }
        }
      });
    },
    catalogToggleHandle: function(m) {
      this.catalogkey = m.id;
      this.radio=1;
      if(this.catalogkey==2 && (this.radio==1 || this.radio==2)){
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
          label: '10 VS 10'
        },
        {
          id: 'b',
          label: '20 VS 20'
        },
        {
          id: 'c',
          label: '50 VS 50'
        },
        {
          id: 'd',
          label: '100 VS 100'
        },
      ];
        this.$data.hstatus=0;
      }
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
      if(this.catalogkey==2 && (this.radio==1 || this.radio==2)){
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
          label: '10 VS 10'
        },
        {
          id: 'b',
          label: '20 VS 20'
        },
        {
          id: 'c',
          label: '50 VS 50'
        },
        {
          id: 'd',
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
  padding-left: 5px;
  margin-top: 25px;
  font-size: 15px;
}
.silder-select-no2 {
  float: left;
  height: 55px;
  padding-left: 5px;
  margin-top: 25px;
  font-size: 15px;
}
.silder-select-no3 {
  float: left;
  height: 50px;
  padding-left: 5px;
  margin-top: 25px;
  font-size: 15px;
}
.silder-result {
  float: left;
  height: 70px;
  padding-left: 5px;
  font-size: 15px;
  margin-bottom: 60px;
  border-top: solid 1pt rgb(224, 221, 221);
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
