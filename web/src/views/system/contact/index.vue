<script setup>
import CommonPage from '@/components/page/CommonPage.vue'
import QueryBarItem from '@/components/query-bar/QueryBarItem.vue'
import CrudTable from '@/components/table/CrudTable.vue'
import { formatDate, renderIcon } from '@/utils'
import api from '@/api'

const $table = ref(null)
const queryItems = ref({ keyword: null })
const activeTab = ref('unread')
const selectedRowKeys = ref([])

const columns = [
  { type: 'selection', width: 40, fixed: 'left' },
  { title: '姓名', key: 'name', width: 100 },
  { title: '电话', key: 'phone', width: 120 },
  { title: '邮箱', key: 'email', width: 200 },
  { title: '留言内容', key: 'message', width: 360, ellipsis: { tooltip: true } },
  { title: '已读', key: 'is_read', width: 60, render: (row) => row.is_read ? '是' : '否' },
  { title: '创建时间', key: 'created_at', width: 160, render: (row) => formatDate(row.created_at) },
]

function getData(params) {
  const is_read = activeTab.value === 'read' ? true : false
  return api.getContactList({ ...params, is_read })
}

function handleTabChange(name) {
  activeTab.value = name
  $table.value?.handleSearch()
}

function onChecked(rowKeys) {
  selectedRowKeys.value = rowKeys
}

async function handleMarkRead() {
  if (!selectedRowKeys.value?.length) return
  await api.markContactRead({ ids: selectedRowKeys.value })
  window.$message?.success('已标记为已读')
  selectedRowKeys.value = []
  $table.value?.handleSearch()
}
</script>

<template>
  <CommonPage show-footer title="客户咨询">
    <template #action>
      <n-space>
        <n-button type="success" @click="handleMarkRead">标记已读</n-button>
      </n-space>
    </template>

    <n-tabs type="segment" :value="activeTab" @update:value="handleTabChange">
      <n-tab-pane name="unread" tab="未读">
        <CrudTable
          ref="$table"
          v-model:query-items="queryItems"
          :columns="columns"
          :get-data="getData"
          @onChecked="onChecked"
        >
          <template #queryBar>
            <QueryBarItem label="关键词" :label-width="60">
              <n-input v-model:value="queryItems.keyword" clearable placeholder="姓名/电话/邮箱/内容" />
            </QueryBarItem>
          </template>
        </CrudTable>
      </n-tab-pane>

      <n-tab-pane name="read" tab="已读">
        <CrudTable
          ref="$table"
          v-model:query-items="queryItems"
          :columns="columns"
          :get-data="getData"
          @onChecked="onChecked"
        >
          <template #queryBar>
            <QueryBarItem label="关键词" :label-width="60">
              <n-input v-model:value="queryItems.keyword" clearable placeholder="姓名/电话/邮箱/内容" />
            </QueryBarItem>
          </template>
        </CrudTable>
      </n-tab-pane>
    </n-tabs>
  </CommonPage>
</template>

