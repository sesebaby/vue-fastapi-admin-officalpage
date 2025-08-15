from tortoise import fields

from app.models.base import BaseModel, TimestampMixin


class ContactMessage(BaseModel, TimestampMixin):
    name = fields.CharField(max_length=50, description="姓名", index=True)
    phone = fields.CharField(max_length=30, description="电话", index=True)
    email = fields.CharField(max_length=255, description="邮箱", index=True)
    message = fields.TextField(description="留言内容")
    is_read = fields.BooleanField(default=False, description="是否已读", index=True)

    class Meta:
        table = "contact_message"

