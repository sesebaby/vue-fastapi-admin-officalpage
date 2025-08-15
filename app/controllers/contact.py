from tortoise.expressions import Q

from app.core.crud import CRUDBase, Total
from app.models.contact import ContactMessage
from app.schemas.contact import ContactCreate


class ContactController(CRUDBase[ContactMessage, ContactCreate, ContactCreate]):
    def __init__(self):
        super().__init__(model=ContactMessage)

    async def list_by(self, page: int, page_size: int, is_read: bool | None, keyword: str | None):
        filters = Q()
        if is_read is not None:
            filters &= Q(is_read=is_read)
        if keyword:
            filters &= Q(name__contains=keyword) | Q(phone__contains=keyword) | Q(email__contains=keyword) | Q(message__contains=keyword)
        total, items = await self.list(page=page, page_size=page_size, search=filters, order=["-created_at"])
        return total, items


contact_controller = ContactController()

