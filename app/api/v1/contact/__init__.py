from fastapi import APIRouter

from .contact import router

contact_router = APIRouter()
contact_router.include_router(router, tags=["客户咨询"], prefix="/contact")

__all__ = ["contact_router"]

