from fastapi import APIRouter, Body, Query, Depends
from tortoise.expressions import Q

from app.core.dependency import DependPermission
from app.schemas import Success, SuccessExtra
from app.schemas.contact import ContactCreate, ContactListQuery, ContactMarkRead
from app.controllers.contact import contact_controller

router = APIRouter()


@router.post("/create", summary="提交客户咨询（公开）")
async def create_contact(contact_in: ContactCreate):
    await contact_controller.create(contact_in)
    return Success(msg="OK")


@router.get("/list", summary="查看客户咨询列表")
async def list_contact(
    page: int = Query(1, ge=1, description="页码"),
    page_size: int = Query(10, ge=1, le=100, description="每页数量"),
    is_read: bool | None = Query(None, description="是否已读过滤"),
    keyword: str | None = Query(None, description="关键词：姓名/电话/邮箱/内容"),
    dep: None = Depends(DependPermission),
):
    total, items = await contact_controller.list_by(page=page, page_size=page_size, is_read=is_read, keyword=keyword)
    data = [await item.to_dict() for item in items]
    return SuccessExtra(data=data, total=total, page=page, page_size=page_size)


@router.post("/mark_read", summary="标记已读")
async def mark_read(payload: ContactMarkRead, dep: None = Depends(DependPermission)):
    if not payload.ids:
        return Success(msg="OK")
    await contact_controller.model.filter(id__in=payload.ids).update(is_read=True)
    return Success(msg="OK")

