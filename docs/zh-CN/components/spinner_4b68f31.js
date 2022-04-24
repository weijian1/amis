amis.define('docs/zh-CN/components/spinner.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Spinner 加载中",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Spinner",
    "icon": null,
    "order": 64,
    "html": "<div class=\"markdown-body\"><p>一般用来做 <code>loading</code> 使用。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2><p><code>show</code> 属性控制 <code>spinner</code> 是否渲染。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": {\n        \"type\": \"spinner\",\n        \"show\": true,\n    }\n}\n</script></div><div class=\"markdown-body\">\n<p><code>size</code> 属性控制 <code>spinner</code> 的大小，有三种配置：<code>sm</code>, <code>lg</code> 和 空值。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": [\n        {\n            \"type\": \"spinner\",\n            \"show\": true,\n            \"size\": \"sm\",\n            \"className\": \"mr-4\"\n        },\n        {\n            \"type\": \"spinner\",\n            \"show\": true,\n            \"size\": \"\",\n            \"className\": \"mr-4\"\n        },\n        {\n            \"type\": \"spinner\",\n            \"show\": true,\n            \"size\": \"lg\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p><code>className</code> 属性、 <code>spinnerClassName</code>属性和 <code>spinnerWrapClassName</code>属性可以配置 spinner 自定义的 class，<code>className</code>会添加到 spinner 组件的最外层标签上，<code>spinnerClassName</code>会添加到 icon 对应的标签上，<code>spinnerWrapClassName</code> 在作为组件容器使用时，会作用于整个 Spinner 组件的最外层元素上。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": [\n        {\n            \"type\": \"spinner\",\n            \"show\": true,\n            \"className\": \"my-spinner\",\n            \"spinnerClassName\": \"my-spinner-custom-icon\",\n            \"spinnerWrapClassName\": \"my-spinner-wrap\",\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p><code>icon</code> 属性可以配置自定义的图标，可以是 <code>amis</code> 内置的图标名称（需要是在 icons.tsx 组件中注册过的）; 可以是字体图标库的名称(需要引入对应的图标库)，比如<code>fa fa-spinner</code>; 也可以是网络图片，比如 <code>/examples/static/logo.png</code>;</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": [\n        {\n            \"type\": \"spinner\",\n            \"show\": true,\n            \"icon\": \"\",\n            \"className\": \"mr-4\"\n        },\n        {\n            \"type\": \"spinner\",\n            \"show\": true,\n            \"icon\": \"reload\",\n            \"className\": \"mr-4\"\n        },\n        {\n            \"type\": \"spinner\",\n            \"show\": true,\n            \"icon\": \"fa fa-spinner\",\n            \"className\": \"mr-4\"\n        },\n        {\n            \"type\": \"spinner\",\n            \"show\": true,\n            \"icon\": \"/examples/static/logo.png\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p><code>tip</code> 属性可以配置 spinner 的文案，同时 <code>tipPlacement</code>可以配置 tip 的相对于 icon 的位置，有四种配置：<code>top</code>,<code>right</code>,<code>bottom</code>(默认),<code>left</code>;</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": [\n        {\n            \"type\": \"spinner\",\n            \"show\": true,\n            \"tip\": \"加载中...\",\n            \"className\": \"mr-10\"\n        },\n        {\n            \"type\": \"spinner\",\n            \"show\": true,\n            \"tip\": \"加载中...\",\n            \"tipPlacement\": \"right\",\n            \"className\": \"mr-10\"\n        },\n        {\n            \"type\": \"spinner\",\n            \"show\": true,\n            \"tip\": \"加载中...\",\n            \"tipPlacement\": \"top\",\n            \"className\": \"mr-10\"\n        },\n        {\n            \"type\": \"spinner\",\n            \"show\": true,\n            \"tip\": \"加载中...\",\n            \"tipPlacement\": \"left\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p><code>delay</code> 属性可以配置 spinner 的延迟显示时间，例如 delay=1000，<code>show</code> 属性设为 <code>true</code> 后，1000ms 后才会显示出来。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": {\n        \"type\": \"spinner\",\n        \"show\": true,\n        \"delay\": 1000\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%BD%9C%E4%B8%BA%E5%AE%B9%E5%99%A8%E4%BD%BF%E7%94%A8\" href=\"#%E4%BD%9C%E4%B8%BA%E5%AE%B9%E5%99%A8%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>作为容器使用</h2><p><code>spinner</code> 组件可以作为容器使用，被包裹的内容可通过 <code>body</code> 配置, 且作为容器使用的时候可以使用 <code>overlay</code> 属性来配置显示 spinner 的时候是否显示遮罩层（遮罩层背景颜色默认是透明的，可通过外层 className 自定义遮罩层颜色）。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": {\n        \"type\": \"spinner\",\n        \"show\": true,\n        \"overlay\": true,\n        \"body\": {\n            \"type\": \"form\",\n            \"body\": [\n                {\n                    \"type\": \"input-text\",\n                    \"name\": \"name\",\n                    \"label\": \"姓名：\"\n                },\n                {\n                    \"name\": \"email\",\n                    \"type\": \"input-email\",\n                    \"label\": \"邮箱：\"\n                }\n            ]\n        }\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>spinner</code></td>\n<td>指定为 Spinner 渲染器</td>\n</tr>\n<tr>\n<td>show</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否显示 spinner 组件</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>spinner 图标父级标签的自定义 class</td>\n</tr>\n<tr>\n<td>spinnerClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>组件中 icon 所在标签的自定义 class</td>\n</tr>\n<tr>\n<td>spinnerWrapClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>作为容器使用时组件最外层标签的自定义 class</td>\n</tr>\n<tr>\n<td>size</td>\n<td><code>string</code></td>\n<td></td>\n<td>组件大小 <code>sm</code> <code>lg</code></td>\n</tr>\n<tr>\n<td>icon</td>\n<td><code>string</code></td>\n<td></td>\n<td>组件图标，可以是<code>amis</code>内置图标，也可以是字体图标或者网络图片链接，作为 ui 库使用时也可以是自定义组件</td>\n</tr>\n<tr>\n<td>tip</td>\n<td><code>string</code></td>\n<td></td>\n<td>配置组件文案，例如<code>加载中...</code></td>\n</tr>\n<tr>\n<td>tipPlacement</td>\n<td><code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code></td>\n<td><code>bottom</code></td>\n<td>配置组件 <code>tip</code> 相对于 <code>icon</code> 的位置</td>\n</tr>\n<tr>\n<td>delay</td>\n<td><code>number</code></td>\n<td><code>0</code></td>\n<td>配置组件显示延迟的时间（毫秒）</td>\n</tr>\n<tr>\n<td>overlay</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>配置组件显示 spinner 时是否显示遮罩层</td>\n</tr>\n<tr>\n<td>body</td>\n<td><a href=\"../../docs/types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>作为容器使用时，被包裹的内容</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本使用",
          "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "作为容器使用",
          "fragment": "%E4%BD%9C%E4%B8%BA%E5%AE%B9%E5%99%A8%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E4%BD%9C%E4%B8%BA%E5%AE%B9%E5%99%A8%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
