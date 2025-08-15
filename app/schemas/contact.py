from datetime import datetime
from typing import Optional, List

from pydantic import BaseModel, EmailStr, Field


class ContactCreate(BaseModel):
    name: str = Field(min_length=2, max_length=50)
    phone: str = Field(min_length=7, max_length=30)
    email: EmailStr
    message: str = Field(min_length=10, max_length=500)


class ContactItem(BaseModel):
    id: int
    name: str
    phone: str
    email: EmailStr
    message: str
    is_read: bool
    created_at: Optional[datetime]
    updated_at: Optional[datetime]


class ContactListQuery(BaseModel):
    page: int = Field(1, ge=1)
    page_size: int = Field(10, ge=1, le=100)
    is_read: Optional[bool] = None
    keyword: Optional[str] = None


class ContactMarkRead(BaseModel):
    ids: List[int] = Field(default_factory=list)

