import React from 'react';
import Tree, { TreeNode } from 'rc-tree';
import API from "./utils/API";

const arr = [];
const key = treeNode.props.eventKey;

function numberOfBranches(arr) {
    for (let i = 0; i < arr.children.length; i++) {
        arr.push({ name: `leaf ${key}-${i}`, key: `${key}-${i}` });
    }
    return arr;
}
numberOfBranches();

function setLeaf(songData, listKey, level) {
const loopLeaf = (data, lev) => {
  const branch = lev - 1;
  data.forEach((song) => {
    if ((song.key.length > listKey.length) ? song.key.indexOf(listKey) !== 0 :
      list.indexOf(song.key) !== 0) {
      return;
    }
    if (song.children) {
      loopLeaf(song.children, branch);
    } else if (branch < 1) {
      song.isLeaf = true;
    }
  });
};
loopLeaf(songData, level + 1);
}

function getNewTreeData(songData, listKey, child, level) {
    const loop = (data) => {
        if (level < 1 || listKey.length - 3 > level * 2) return;
        data.forEach((song) => {
            if (listKey.indexOf(song.key) === 0) {
                if (song.children) {
                    loop(item.children);
                } else {
                    song.children = child;
                }
            }
        });
    };
    loop(songData);
    setLeaf(songData, listKey, level);


    class Demo extends React.Component {
        state = {
            treeData: [],
            checkedKeys: [],
        };
        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    treeData: [
                        { name: 'pNode 01', key: '0-0' },
                        { name: 'pNode 02', key: '0-1' },
                        { name: 'pNode 03', key: '0-2', isLeaf: true },
                    ],
                    checkedKeys: ['0-0'],
                });
            }, 100);
        }
        onSelect = (info) => {
            console.log('selected', info);
        }
        onCheck = (checkedKeys) => {
            console.log(checkedKeys);
            this.setState({
                checkedKeys,
            });
        }
        onLoadData = (treeNode) => {
            console.log('load data...');
            return new Promise((resolve) => {
                setTimeout(() => {
                    const treeData = [...this.state.treeData];
                    getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);
                    this.setState({ treeData });
                    resolve();
                }, 500);
            });
        }
        render() {
            const loop = (data) => {
                return data.map((item) => {
                    if (item.children) {
                        return <TreeNode title={item.name} key={item.key}>{loop(item.children)}</TreeNode>;
                    }
                    return (
                        <TreeNode title={item.name} key={item.key} isLeaf={item.isLeaf}
                            disabled={item.key === '0-0-0'}
                        />
                    );
                });
            };
            const treeNodes = loop(this.state.treeData);
            return (
                <div>
                    <h2>dynamic render</h2>
                    <Tree
                        onSelect={this.onSelect}
                        checkable onCheck={this.onCheck} checkedKeys={this.state.checkedKeys}
                        loadData={this.onLoadData}
                    >
                        {treeNodes}
                    </Tree>
                </div>
            );
        }
    